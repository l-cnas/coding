@extends('layouts.app')

@section('page_title', 'User Settings')

@section('content')
    <div class="auth-box">
        <h2>Settings</h2>

        @if (session('success'))
            <p class="form-success">{{ session('success') }}</p>
        @endif

        <form action="{{ route('settings') }}" method="POST">
            @csrf

            <div class="form-row">
                <label>Name</label>
                <input type="text" name="name" value="{{ old('name', auth()->user()->name) }}">
                @error('name')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Email</label>
                <input type="email" name="email" value="{{ old('email', auth()->user()->email) }}">
                @error('email')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <button type="submit">Save changes</button>
        </form>
    </div>
@endsection
