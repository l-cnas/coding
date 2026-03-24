@extends('layouts.admin')

@section('page_title', 'Admin Tags')

@section('admin_content')
    <div class="admin-page-box">
        <h2>Admin Tags</h2>

        @if (session('success'))
            <p class="form-success">{{ session('success') }}</p>
        @endif

        <div class="admin-tag-create-box">
            <h3>Create New Tag</h3>

            <form action="{{ route('admin.tags.store') }}" method="POST" class="admin-actions">
                @csrf
                <input type="text" name="name" placeholder="Tag name">
                <button type="submit">Create tag</button>
            </form>

            @error('name')
                <p class="form-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="admin-tag-list">
            <h3>Existing Tags</h3>

            @forelse($tags as $tag)
                <div class="admin-story-item">
                    <p><strong>ID:</strong> {{ $tag->id }}</p>
                    <p><strong>Current tag:</strong> #{{ $tag->name }}</p>

                    <div class="admin-actions">
                        <form action="{{ route('admin.tags.update', $tag) }}" method="POST" class="admin-inline-form">
                            @csrf
                            <input type="text" name="name" value="{{ $tag->name }}">
                            <button type="submit">Save tag</button>
                        </form>

                        <form action="{{ route('admin.tags.delete', $tag) }}" method="POST" class="admin-inline-form"
                            onsubmit="return confirm('Delete this tag?')">
                            @csrf
                            <button type="submit">Delete tag</button>
                        </form>
                    </div>
                </div>
            @empty
                <p>No tags found.</p>
            @endforelse
        </div>
    </div>
@endsection
