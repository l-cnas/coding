@extends('layouts.app')

@section('page_title', 'Admin Stories')

@section('content')
    <div class="admin-box">
        <h2>All Stories</h2>

        @forelse($stories as $story)
            <div class="admin-story-item">
                <p><strong>ID:</strong> {{ $story->id }}</p>
                <p><strong>User ID:</strong> {{ $story->user_id }}</p>
                <p><strong>Status:</strong> {{ $story->status }}</p>
                <p><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</p>
                <p><strong>Text:</strong> {{ $story->content }}</p>

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
