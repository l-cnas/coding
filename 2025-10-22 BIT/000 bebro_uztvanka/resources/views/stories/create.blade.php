@extends('layouts.app')

@section('page_title', 'Create Story')

@section('content')
    <div class="auth-box">
        <h2>Create Story</h2>

        <form action="{{ route('stories.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="form-row">
                <label>Story title</label>
                <input type="text" name="title" value="{{ old('title') }}">
                @error('title')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

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

            <div class="form-row">
                <label>Gallery images</label>
                <input type="file" name="gallery_images[]" multiple>
                @error('gallery_images.*')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Select existing tags</label>
                <div class="tag-checkbox-list">
                    @foreach ($tags as $tag)
                        <label class="tag-checkbox-item">
                            <input type="checkbox" name="tags[]" value="{{ $tag->id }}">
                            #{{ $tag->name }}
                        </label>
                    @endforeach
                </div>
            </div>

            <div class="form-row">
                <label>Add new tags, separated by commas</label>
                <input type="text" name="new_tags" value="{{ old('new_tags') }}" placeholder="help, community, animals">
            </div>

            <button type="submit">Create story</button>
        </form>
    </div>
@endsection
