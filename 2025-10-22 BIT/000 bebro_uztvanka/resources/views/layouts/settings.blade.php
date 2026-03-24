@extends('layouts.app')

@section('content')
    <div class="settings-page">
        <aside class="settings-sidebar">
            <h2>User Settings</h2>

            <a href="{{ route('settings.profile.page') }}">Profile Details</a>
            <a href="{{ route('settings.account.page') }}">Name and Email</a>
            <a href="{{ route('settings.password.page') }}">Password Change</a>
            <a href="{{ route('settings.stories.page') }}">My Stories</a>
        </aside>

        <section class="settings-main">
            @if (session('success'))
                <p class="form-success">{{ session('success') }}</p>
            @endif

            @if (session('error'))
                <p class="form-error">{{ session('error') }}</p>
            @endif

            @yield('settings_content')
        </section>
    </div>
@endsection
