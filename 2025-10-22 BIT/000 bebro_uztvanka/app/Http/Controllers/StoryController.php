<?php

namespace App\Http\Controllers;

use App\Models\Story;
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

        return view('stories.create');
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
        ]);

        $imagePath = null;

        if ($request->hasFile('main_image')) {
            $imagePath = $request->file('main_image')->store('stories', 'public');
        }

        Story::create([
            'user_id' => $user->id,
            'content' => $request->content,
            'goal_amount' => $request->goal_amount,
            'main_image' => $imagePath,
            'status' => 'pending',
        ]);

        return redirect('/')->with('success', 'Story created successfully and is waiting for admin approval.');
    }
}
