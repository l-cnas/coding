@extends('layouts.admin')

@section('page_title', 'Stories Per User')

@section('admin_content')
    <div class="admin-page-box">
        <h2>Stories Per User</h2>

        @if (session('success'))
            <p class="form-success">{{ session('success') }}</p>
        @endif

        @forelse($users as $user)
            <div class="admin-story-item">
                <p><strong>ID:</strong> {{ $user->id }}</p>
                <p><strong>Name:</strong> {{ $user->name }}</p>
                <p><strong>Email:</strong> {{ $user->email }}</p>
                <p><strong>Admin:</strong> {{ $user->is_admin ? 'Yes' : 'No' }}</p>

                <form action="{{ route('admin.users.story-limit', $user) }}" method="POST" class="admin-actions">
                    @csrf
                    <input type="number" name="story_limit" value="{{ $user->story_limit }}" min="0">
                    <button type="submit">Save story limit</button>
                </form>
            </div>
        @empty
            <p>No users found.</p>
        @endforelse
    </div>
@endsection
