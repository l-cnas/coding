<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

class AdminStoryController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $stories = Story::latest()->get();

        return view('admin.stories', [
            'stories' => $stories,
        ]);
    }

    public function approve(Request $request, Story $story)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $story->status = 'approved';
        $story->save();

        return redirect()->route('admin.stories');
    }

    public function delete(Request $request, Story $story)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $story->delete();

        return redirect()->route('admin.stories');
    }
}
