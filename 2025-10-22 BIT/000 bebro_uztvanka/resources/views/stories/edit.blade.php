@extends('layouts.app')

@section('page_title', 'Edit Story')

@section('content')
    <div class="auth-box">
        <h2>Edit Story</h2>

        <form action="{{ route('stories.update', $story) }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="form-row">
                <label>Story text</label>
                <textarea name="content" rows="6">{{ old('content', $story->content) }}</textarea>
                @error('content')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-row">
                <label>Goal amount</label>
                <input type="number" name="goal_amount" step="0.01"
                    value="{{ old('goal_amount', $story->goal_amount) }}">
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

            @if ($story->main_image)
                <div class="form-row">
                    <p>Current main image:</p>
                    <img src="{{ asset('storage/' . $story->main_image) }}" alt="Current image"
                        style="max-width: 220px; border-radius: 8px;">
                </div>
            @endif

            <div class="form-row">
                <label>Add gallery images</label>
                <input type="file" name="gallery_images[]" multiple>
                @error('gallery_images.*')
                    <p class="form-error">{{ $message }}</p>
                @enderror
            </div>

            @if ($story->images->count())
                <div class="form-row">
                    <p>Current gallery:</p>
                    <div class="story-gallery">
                        @foreach ($story->images as $image)
                            <img src="{{ asset('storage/' . $image->image_path) }}" alt="Gallery image">
                        @endforeach
                    </div>
                </div>
            @endif

            <div class="form-row">
                <label>Select existing tags</label>
                <div class="tag-checkbox-list">
                    @foreach ($tags as $tag)
                        <label class="tag-checkbox-item">
                            <input type="checkbox" name="tags[]" value="{{ $tag->id }}"
                                {{ $story->tags->contains('id', $tag->id) ? 'checked' : '' }}>
                            #{{ $tag->name }}
                        </label>
                    @endforeach
                </div>
            </div>

            <div class="form-row">
                <label>Add new tags, separated by commas</label>
                <input type="text" name="new_tags" value="{{ old('new_tags') }}" placeholder="help, community, animals">
            </div>

            <button type="submit">Save changes</button>
        </form>
    </div>
@endsection
