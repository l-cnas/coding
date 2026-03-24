@extends('layouts.app')

@section('page_title', 'User Settings')

@section('content')
    <div class="settings-page">
        <aside class="settings-sidebar">
            <h2>User Settings</h2>

            <a href="#profile-section">Profile Details</a>
            <a href="#account-section">Name and Email</a>
            <a href="#password-section">Password Change</a>
            <a href="#stories-section">My Stories</a>
        </aside>

        <section class="settings-main">
            @if (session('success'))
                <p class="form-success">{{ session('success') }}</p>
            @endif

            @if (session('error'))
                <p class="form-error">{{ session('error') }}</p>
            @endif

            <div class="settings-box" id="profile-section">
                <h3>Profile Details</h3>

                <form action="{{ route('settings.profile') }}" method="POST">
                    @csrf

                    <div class="form-row">
                        <label>Location</label>
                        <input type="text" name="location" value="{{ old('location', $user->location) }}">
                        @error('location')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="form-row">
                        <label>Age</label>
                        <input type="number" name="age" value="{{ old('age', $user->age) }}">
                        @error('age')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="form-row">
                        <label>About</label>
                        <textarea name="about" rows="5">{{ old('about', $user->about) }}</textarea>
                        @error('about')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <button type="submit">Save profile details</button>
                </form>
            </div>

            <div class="settings-box" id="account-section">
                <h3>Name and Email</h3>

                <form action="{{ route('settings.account') }}" method="POST">
                    @csrf

                    <div class="form-row">
                        <label>Name</label>
                        <input type="text" name="name" value="{{ old('name', $user->name) }}">
                        @error('name')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="form-row">
                        <label>Email</label>
                        <input type="email" name="email" value="{{ old('email', $user->email) }}">
                        @error('email')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <button type="submit">Save account details</button>
                </form>
            </div>

            <div class="settings-box" id="password-section">
                <h3>Password Change</h3>

                <form action="{{ route('settings.password') }}" method="POST">
                    @csrf

                    <div class="form-row">
                        <label>Current password</label>
                        <input type="password" name="current_password">
                        @error('current_password')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="form-row">
                        <label>New password</label>
                        <input type="password" name="password">
                        @error('password')
                            <p class="form-error">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="form-row">
                        <label>Repeat new password</label>
                        <input type="password" name="password_confirmation">
                    </div>

                    <button type="submit">Change password</button>
                </form>
            </div>

            <div class="settings-box" id="stories-section">
                <h3>My Stories</h3>

                @forelse($user->stories as $story)
                    <div class="my-story-item">
                        <p><strong>Title:</strong> {{ $story->title }}</p>
                        <p><strong>Status:</strong> {{ $story->status }}</p>
                        <p><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</p>

                        <div class="my-story-actions">
                            <a href="{{ route('stories.show', $story) }}">Open</a>

                            @if ($story->status !== 'approved')
                                <a href="{{ route('stories.edit', $story) }}">Edit</a>
                            @endif
                        </div>
                    </div>
                @empty
                    <p>No stories submitted yet.</p>
                @endforelse
            </div>
        </section>
    </div>
@endsection
