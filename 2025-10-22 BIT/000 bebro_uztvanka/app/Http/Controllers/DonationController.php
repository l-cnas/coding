<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\Story;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function store(Request $request, Story $story)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
        ]);

        $collectedAmount = $story->donations()->sum('amount');

        if ($collectedAmount >= $story->goal_amount) {
            return back()->with('error', 'This story already reached its goal.');
        }

        Donation::create([
            'story_id' => $story->id,
            'user_id' => $request->user()->id,
            'amount' => $request->amount,
        ]);

        return back()
            ->with('success', 'Donation added successfully.')
            ->with('success_story_id', $story->id);
    }
}
