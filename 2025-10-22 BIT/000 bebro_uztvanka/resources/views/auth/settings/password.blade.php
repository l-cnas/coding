@extends('layouts.settings')

@section('page_title', 'Password Change')

@section('settings_content')
    <div class="settings-box">
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
@endsection
