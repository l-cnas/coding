@extends('layouts.app')

@section('page_title', 'Create Story')

@section('content')
    <div class="auth-box">
        <h2>Create Story</h2>

        <form action="{{ route('stories.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="form-row">
                <label>Story text</label>
                <textarea name="content" rows="6">{{ old('content') }}</textarea>
                @error('content')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Goal amount</label>
                <input type="number" name="goal_amount" step="0.01" value="{{ old('goal_amount') }}">
                @error('goal_amount')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Main image</label>
                <input type="file" name="main_image">
                @error('main_image')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <button type="submit">Create story</button>
        </form>
    </div>
@endsection