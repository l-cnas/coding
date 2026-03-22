<?php

namespace App\Http\Controllers;

use App\Models\Story;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $userCount = User::count();
        $storyCount = Story::count();

        return view('admin.dashboard', [
            'userCount' => $userCount,
            'storyCount' => $storyCount,
        ]);
    }
}
