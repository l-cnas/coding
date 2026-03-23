@extends('layouts.app')

@section('page_title', 'Sharing is caring')

@section('content')


    <section class="hero">
        <h2>Support real stories and ideas</h2>
        <p>A simple crowdfunding platform for people who need help bringing ideas to life.</p>
    </section>

    <section class="top-bar">
        <div class="top-bar-left">
            <button class="filter-btn">All</button>
            <button class="filter-btn">Health</button>
            <button class="filter-btn">Animals</button>
            <button class="filter-btn">Community</button>
            <button class="filter-btn">Education</button>
        </div>

        <div class="top-bar-right">
            <label for="sort">Sort by:</label>
            <select id="sort">
                <option>Newest</option>
                <option>Most liked</option>
            </select>
        </div>
    </section>

    <section class="stories-grid">
        @forelse($stories as $story)
            @php
                $collectedAmount = $story->donations->sum('amount');
                $remainingAmount = max($story->goal_amount - $collectedAmount, 0);
                $progressPercent =
                    $story->goal_amount > 0 ? min(($collectedAmount / $story->goal_amount) * 100, 100) : 0;
            @endphp

            <article class="story-card">
                @if ($story->main_image)
                    <img src="{{ asset('storage/' . $story->main_image) }}" alt="Story image" class="story-main-image">
                @else
                    <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">
                @endif

                <div class="story-content">
                    @if (session('success') && session('success_story_id') == $story->id)
                        <p class="form-success">{{ session('success') }}</p>
                    @endif

                    <div class="story-top">
                        <span class="story-status">Active</span>
                        <span class="story-likes">0 hearts</span>
                    </div>

                    <h3>
                        <a href="{{ route('stories.show', $story) }}" class="story-title-link">
                            Story #{{ $story->id }}
                        </a>
                    </h3>

                    <p class="story-text">
                        {{ $story->content }}
                    </p>

                    @auth
                        @if (auth()->user()->id === $story->user_id && $story->status !== 'approved')
                            <p>
                                <a href="{{ route('stories.edit', $story) }}">Edit story</a>
                            </p>
                        @endif
                    @endauth

                    @if ($story->images->count())
                        <div class="story-gallery">
                            @foreach ($story->images->take(3) as $image)
                                <img src="{{ asset('storage/' . $image->image_path) }}" alt="Gallery image">
                            @endforeach
                        </div>
                    @endif

                    <div class="story-money">
                        <div><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</div>
                        <div><strong>Collected:</strong> {{ number_format($collectedAmount, 2) }} €</div>
                        <div><strong>Remaining:</strong> {{ number_format($remainingAmount, 2) }} €</div>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-fill" style="width: {{ $progressPercent }}%;"></div>
                    </div>

                    <div class="story-tags">
                        @forelse($story->tags as $tag)
                            <span>#{{ $tag->name }}</span>
                        @empty
                            <span>No tags</span>
                        @endforelse
                    </div>

                    <div class="donation-history">
                        <h4>Donation history</h4>
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
                            @if ($collectedAmount < $story->goal_amount)
                                <form action="{{ route('stories.donate', $story) }}" method="POST" class="donation-form">
                                    @csrf
                                    <input type="number" name="amount" step="0.01" min="1" placeholder="Amount">
                                    <button type="submit">Donate</button>
                                </form>
                            @else
                                <p>Goal reached.</p>
                            @endif
                        @else
                            <p>Login to donate.</p>
                        @endauth

                        <button>Heart</button>
                    </div>
                </div>
            </article>
        @empty
            <p>No approved stories yet.</p>
        @endforelse
    </section>
@endsection
