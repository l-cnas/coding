<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $users = User::latest()->get();

        return view('admin.users', [
            'users' => $users,
        ]);
    }

    public function updateStoryLimit(Request $request, User $user)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $request->validate([
            'story_limit' => 'required|integer|min:0',
        ]);

        $user->story_limit = $request->story_limit;
        $user->save();

        return redirect()->route('admin.users')->with('success', 'Story limit updated.');
    }
}
