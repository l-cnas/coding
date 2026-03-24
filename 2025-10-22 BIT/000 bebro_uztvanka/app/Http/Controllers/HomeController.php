<?php

namespace App\Http\Controllers;

use App\Models\Story;
use App\Models\Tag;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $selectedTag = $request->query('tag');
        $selectedSort = $request->query('sort', 'newest');

        $query = Story::with(['images', 'tags', 'donations.user', 'likes'])
            ->where('status', 'approved');

        if ($selectedTag) {
            $query->whereHas('tags', function ($q) use ($selectedTag) {
                $q->where('name', $selectedTag);
            });
        }

        $stories = $query->get();

        if ($selectedSort === 'liked') {
            $stories = $stories->sortByDesc(function ($story) {
                return $story->likes->count();
            })->values();
        } else {
            $stories = $stories->sortByDesc('created_at')->values();
        }

        $stories = $stories->sortBy(function ($story) {
            $collectedAmount = $story->donations->sum('amount');
            return $collectedAmount >= $story->goal_amount ? 1 : 0;
        })->values();

        $tags = Tag::orderBy('name')->get();

        return view('pages.index', [
            'stories' => $stories,
            'tags' => $tags,
            'selectedTag' => $selectedTag,
            'selectedSort' => $selectedSort,
        ]);
    }
}
