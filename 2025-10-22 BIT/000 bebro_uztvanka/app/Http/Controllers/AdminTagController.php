<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class AdminTagController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $tags = Tag::orderBy('name')->get();

        return view('admin.tags', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $request->validate([
            'name' => 'required|string|max:255|unique:tags,name',
        ]);

        Tag::create([
            'name' => ltrim(trim($request->name), '#'),
        ]);

        return redirect()->route('admin.tags')->with('success', 'Tag created successfully.');
    }

    public function update(Request $request, Tag $tag)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $request->validate([
            'name' => 'required|string|max:255|unique:tags,name,' . $tag->id,
        ]);

        $tag->name = ltrim(trim($request->name), '#');
        $tag->save();

        return redirect()->route('admin.tags')->with('success', 'Tag updated successfully.');
    }

    public function delete(Request $request, Tag $tag)
    {
        if (!$request->user() || !$request->user()->is_admin) {
            abort(403);
        }

        $tag->delete();

        return redirect()->route('admin.tags')->with('success', 'Tag deleted successfully.');
    }
}
