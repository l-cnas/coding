@extends('layouts.settings')

@section('page_title', 'Profile Details')

@section('settings_content')
    <div class="settings-box">
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
@endsection
