<?php

namespace App\Http\Controllers;

use App\Models\Story;
use App\Models\StoryImage;
use App\Models\Tag;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();

        if (!$user->is_admin) {
            $storyCount = Story::where('user_id', $user->id)->count();

            if ($storyCount >= $user->story_limit) {
                return redirect('/')->with('error', 'You reached your story limit.');
            }
        }

        $tags = Tag::orderBy('name')->get();

        return view('stories.create', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $user = $request->user();

        if (!$user->is_admin) {
            $storyCount = Story::where('user_id', $user->id)->count();

            if ($storyCount >= $user->story_limit) {
                return redirect('/')->with('error', 'You reached your story limit.');
            }
        }

        $request->validate([
            'content' => 'required|string',
            'goal_amount' => 'required|numeric|min:1',
            'main_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'new_tags' => 'nullable|string',
        ]);

        $imagePath = null;

        if ($request->hasFile('main_image')) {
            $imagePath = $request->file('main_image')->store('stories', 'public');
        }

        $story = Story::create([
            'user_id' => $user->id,
            'content' => $request->content,
            'goal_amount' => $request->goal_amount,
            'main_image' => $imagePath,
            'status' => 'pending',
        ]);

        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $image) {
                $galleryPath = $image->store('stories/gallery', 'public');

                StoryImage::create([
                    'story_id' => $story->id,
                    'image_path' => $galleryPath,
                ]);
            }
        }

        $tagIds = $request->tags ?? [];

        if ($request->filled('new_tags')) {
            $newTags = explode(',', $request->new_tags);

            foreach ($newTags as $tagName) {
                $tagName = trim($tagName);
                $tagName = ltrim($tagName, '#');

                if ($tagName !== '') {
                    $tag = Tag::firstOrCreate([
                        'name' => $tagName,
                    ]);

                    $tagIds[] = $tag->id;
                }
            }
        }

        $story->tags()->sync(array_unique($tagIds));

        return redirect('/')->with('success', 'Story created successfully and is waiting for admin approval.');
    }

    public function show(Story $story)
    {
        if ($story->status !== 'approved') {
            abort(404);
        }

        $story->load(['images', 'tags', 'donations.user']);

        return view('stories.show', [
            'story' => $story,
        ]);
    }

    public function edit(Request $request, Story $story)
    {
        $user = $request->user();

        if ($story->user_id !== $user->id && !$user->is_admin) {
            abort(403);
        }

        if ($story->status === 'approved' && !$user->is_admin) {
            return redirect('/')->with('error', 'Approved stories can no longer be edited.');
        }

        $tags = Tag::orderBy('name')->get();

        return view('stories.edit', [
            'story' => $story->load('images', 'tags'),
            'tags' => $tags,
        ]);
    }

    public function update(Request $request, Story $story)
    {
        $user = $request->user();

        if ($story->user_id !== $user->id && !$user->is_admin) {
            abort(403);
        }

        if ($story->status === 'approved' && !$user->is_admin) {
            return redirect('/')->with('error', 'Approved stories can no longer be edited.');
        }

        $request->validate([
            'content' => 'required|string',
            'goal_amount' => 'required|numeric|min:1',
            'main_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'new_tags' => 'nullable|string',
        ]);

        if ($request->hasFile('main_image')) {
            $story->main_image = $request->file('main_image')->store('stories', 'public');
        }

        $story->content = $request->content;
        $story->goal_amount = $request->goal_amount;

        if ($story->status !== 'approved') {
            $story->status = 'pending';
        }

        $story->save();

        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $image) {
                $galleryPath = $image->store('stories/gallery', 'public');

                StoryImage::create([
                    'story_id' => $story->id,
                    'image_path' => $galleryPath,
                ]);
            }
        }

        $tagIds = $request->tags ?? [];

        if ($request->filled('new_tags')) {
            $newTags = explode(',', $request->new_tags);

            foreach ($newTags as $tagName) {
                $tagName = trim($tagName);
                $tagName = ltrim($tagName, '#');

                if ($tagName !== '') {
                    $tag = Tag::firstOrCreate([
                        'name' => $tagName,
                    ]);

                    $tagIds[] = $tag->id;
                }
            }
        }

        $story->tags()->sync(array_unique($tagIds));

        return redirect('/')->with('success', 'Story updated successfully.');
    }
}
