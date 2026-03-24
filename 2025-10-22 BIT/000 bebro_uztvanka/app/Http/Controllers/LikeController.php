<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Story;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(Request $request, Story $story)
    {
        $alreadyLiked = Like::where('story_id', $story->id)
            ->where('user_id', $request->user()->id)
            ->exists();

        if ($alreadyLiked) {
            return back()
                ->with('error', 'You already hearted this story.')
                ->with('success_story_id', $story->id);
        }

        Like::create([
            'story_id' => $story->id,
            'user_id' => $request->user()->id,
        ]);

        return back()
            ->with('success', 'Heart added successfully.')
            ->with('success_story_id', $story->id);
    }
}
