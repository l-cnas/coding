@extends('layouts.app')

@section('page_title', 'Story Details')

@section('content')
    @php
        $collectedAmount = $story->donations->sum('amount');
        $remainingAmount = max($story->goal_amount - $collectedAmount, 0);
        $progressPercent = $story->goal_amount > 0 ? min(($collectedAmount / $story->goal_amount) * 100, 100) : 0;
        $likesCount = $story->likes->count();
        $userLiked = auth()->check() ? $story->likes->where('user_id', auth()->id())->count() > 0 : false;
        $isFunded = $collectedAmount >= $story->goal_amount;
    @endphp

    <div class="single-story-page">
        <article class="single-story-card {{ $isFunded ? 'story-card-funded' : '' }}">
            @if ($story->main_image)
                <img src="{{ asset('storage/' . $story->main_image) }}" alt="Story image" class="single-story-main-image">
            @endif

            @if (session('success') && session('success_story_id') == $story->id)
                <div class="single-story-success">
                    <p class="form-success">{{ session('success') }}</p>
                </div>
            @endif

            @if (session('error') && session('success_story_id') == $story->id)
                <div class="single-story-success">
                    <p class="form-error">{{ session('error') }}</p>
                </div>
            @endif

            <div class="single-story-bottom">
                <div class="single-story-left">
                    <h2>{{ $story->title }}</h2>

                    @if ($isFunded)
                        <p><strong>Status:</strong> Funded</p>
                    @else
                        <p><strong>Status:</strong> Active</p>
                    @endif

                    <p><strong>Hearts:</strong> {{ $likesCount }}</p>

                    <div class="story-money">
                        <div><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</div>
                        <div><strong>Collected:</strong> {{ number_format($collectedAmount, 2) }} €</div>
                        <div><strong>Remaining:</strong> {{ number_format($remainingAmount, 2) }} €</div>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-fill {{ $isFunded ? 'progress-fill-funded' : '' }}"
                            style="width: {{ $progressPercent }}%;"></div>
                    </div>

                    <div class="story-tags">
                        @forelse($story->tags as $tag)
                            <span>#{{ $tag->name }}</span>
                        @empty
                            <span>No tags</span>
                        @endforelse
                    </div>

                    <div class="donation-history">
                        <h3>Donation history</h3>
                        <ul>
                            @forelse($story->donations->sortByDesc('created_at')->take(3) as $donation)
                                <li>{{ $donation->user->name }} - {{ number_format($donation->amount, 2) }} €</li>
                            @empty
                                <li>No donations yet</li>
                            @endforelse
                        </ul>
                    </div>

                    <div class="story-actions">
                        @auth
                            @if (!$isFunded)
                                <form action="{{ route('stories.donate', $story) }}" method="POST" class="donation-form">
                                    @csrf
                                    <input type="number" name="amount" step="0.01" min="1" placeholder="Amount">
                                    <button type="submit">Donate</button>
                                </form>
                            @else
                                <p class="funded-note">Goal reached. Donations are closed.</p>
                            @endif

                            @if (!$userLiked)
                                <form action="{{ route('stories.like', $story) }}" method="POST">
                                    @csrf
                                    <button type="submit">Heart</button>
                                </form>
                            @else
                                <button type="button" disabled>Hearted</button>
                            @endif
                        @else
                            @if (!$isFunded)
                                <p>Login to donate or heart.</p>
                            @else
                                <p class="funded-note">Goal reached.</p>
                            @endif
                        @endauth
                    </div>
                </div>

                <div class="single-story-right">
                    <div class="single-story-description-box">
                        <h3>Description</h3>
                        <p class="single-story-description-text">
                            {{ $story->content }}
                        </p>
                    </div>

                    <div class="single-story-gallery-box">
                        <h3>Gallery</h3>

                        @if ($story->main_image || $story->images->count())
                            <div class="single-story-gallery">
                                @if ($story->main_image)
                                    <a href="{{ asset('storage/' . $story->main_image) }}" target="_blank">
                                        <img src="{{ asset('storage/' . $story->main_image) }}" alt="Main story image">
                                    </a>
                                @endif

                                @foreach ($story->images as $image)
                                    <a href="{{ asset('storage/' . $image->image_path) }}" target="_blank">
                                        <img src="{{ asset('storage/' . $image->image_path) }}" alt="Gallery image">
                                    </a>
                                @endforeach
                            </div>
                        @else
                            <p>No gallery images uploaded.</p>
                        @endif
                    </div>
                </div>
            </div>
        </article>
    </div>
@endsection
