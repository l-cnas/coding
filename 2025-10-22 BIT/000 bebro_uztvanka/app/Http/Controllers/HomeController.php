<?php

namespace App\Http\Controllers;

use App\Models\Story;

class HomeController extends Controller
{
    public function index()
    {
        $stories = Story::with(['images', 'tags', 'donations.user'])
            ->where('status', 'approved')
            ->latest()
            ->get();

        return view('pages.index', [
            'stories' => $stories,
        ]);
    }
}
