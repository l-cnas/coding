@extends('layouts.settings')

@section('page_title', 'My Stories')

@section('settings_content')
    <div class="settings-box">
        <h3>My Stories</h3>

        @forelse($user->stories as $story)
            <div class="my-story-item">
                <p><strong>Title:</strong> {{ $story->title }}</p>
                <p><strong>Status:</strong> {{ $story->status }}</p>
                <p><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</p>

                <div class="my-story-actions">
                    @if ($story->status === 'approved')
                        <a href="{{ route('stories.show', $story) }}">Open</a>
                    @endif

                    @if ($story->status !== 'approved')
                        <a href="{{ route('stories.edit', $story) }}">Edit</a>
                    @endif
                </div>
            </div>
        @empty
            <p>No stories submitted yet.</p>
        @endforelse
    </div>
@endsection
