@extends('layouts.settings')

@section('page_title', 'Name and Email')

@section('settings_content')
    <div class="settings-box">
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
@endsection
