<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $stories = Story::where('status', 'approved')
            ->latest()
            ->get();

        return view('pages.index', [
            'stories' => $stories,
        ]);
    }
}