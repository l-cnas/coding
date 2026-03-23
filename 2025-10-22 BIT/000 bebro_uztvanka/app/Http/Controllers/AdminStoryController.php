<?php

namespace App\Http\Controllers;

use App\Models\Story;
use App\Models\Tag;
use Illuminate\Http\Request;

class AdminStoryController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $stories = Story::with('tags')->latest()->get();
        $allTags = Tag::orderBy('name')->get();

        return view('admin.stories', [
            'stories' => $stories,
            'allTags' => $allTags,
        ]);
    }

    public function approve(Request $request, Story $story)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $story->status = 'approved';
        $story->save();

        return redirect()->route('admin.stories')->with('success', 'Story approved.');
    }

    public function delete(Request $request, Story $story)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $story->delete();

        return redirect()->route('admin.stories')->with('success', 'Story deleted.');
    }

    public function updateTags(Request $request, Story $story)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $request->validate([
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'new_tags' => 'nullable|string',
        ]);

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

        return redirect()->route('admin.stories')->with('success', 'Story tags updated.');
    }
}
