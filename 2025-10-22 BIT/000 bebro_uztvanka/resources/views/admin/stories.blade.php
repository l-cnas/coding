@extends('layouts.admin')

@section('page_title', 'Stories Approval')

@section('admin_content')
    <div class="admin-page-box">
        <h2>Stories Approval</h2>

        @if (session('success'))
            <p class="form-success">{{ session('success') }}</p>
        @endif

        @forelse($stories as $story)
            <div class="admin-story-item">
                <p><strong>ID:</strong> {{ $story->id }}</p>
                <p><strong>Title:</strong> {{ $story->title }}</p>
                <p><strong>User ID:</strong> {{ $story->user_id }}</p>
                <p><strong>Status:</strong> {{ $story->status }}</p>
                <p><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</p>
                <p><strong>Text:</strong> {{ $story->content }}</p>

                <p><strong>Current tags:</strong></p>
                <div class="story-tags">
                    @forelse($story->tags as $tag)
                        <span>#{{ $tag->name }}</span>
                    @empty
                        <span>No tags</span>
                    @endforelse
                </div>

                <form action="{{ route('admin.stories.tags', $story) }}" method="POST" class="admin-tag-form">
                    @csrf

                    <div class="form-row">
                        <label>Select tags</label>
                        <div class="tag-checkbox-list">
                            @foreach ($allTags as $tag)
                                <label class="tag-checkbox-item">
                                    <input type="checkbox" name="tags[]" value="{{ $tag->id }}"
                                        {{ $story->tags->contains('id', $tag->id) ? 'checked' : '' }}>
                                    #{{ $tag->name }}
                                </label>
                            @endforeach
                        </div>
                    </div>

                    <div class="form-row">
                        <label>Add new tags, separated by commas</label>
                        <input type="text" name="new_tags" placeholder="help, community, animals">
                    </div>

                    <div class="admin-actions">
                        <button type="submit">Save tags</button>
                        <a href="{{ route('stories.edit', $story) }}" class="admin-edit-link">Edit story</a>
                    </div>
                </form>

                <div class="admin-actions">
                    @if ($story->status !== 'approved')
                        <form action="{{ route('admin.stories.approve', $story) }}" method="POST">
                            @csrf
                            <button type="submit">Approve</button>
                        </form>
                    @endif

                    <form action="{{ route('admin.stories.delete', $story) }}" method="POST">
                        @csrf
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        @empty
            <p>No stories found.</p>
        @endforelse
    </div>
@endsection
