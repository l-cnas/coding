@extends('layouts.app')

@section('page_title', 'Login')

@section('content')
    <div class="auth-box">
        <h2>Login</h2>

        <form action="{{ route('login') }}" method="POST">
            @csrf

            <div class="form-row">
                <label>Email</label>
                <input type="email" name="email" value="{{ old('email') }}">
                @error('email')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Password</label>
                <input type="password" name="password">
            </div>

            <button type="submit">Login</button>
        </form>
    </div>
@endsection