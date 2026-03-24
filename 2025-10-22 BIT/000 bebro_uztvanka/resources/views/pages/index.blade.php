@extends('layouts.app')

@section('page_title', 'Sharing is caring')

@section('content')
    @if (session('error') && !session('success_story_id'))
        <p class="form-error">{{ session('error') }}</p>
    @endif

    <section class="hero">
        <h2>Support real stories and ideas</h2>
        <p>A simple crowdfunding platform for people who need help bringing ideas to life.</p>
    </section>

    <section class="top-bar">
        <div class="top-bar-left">
            <a href="{{ route('home', ['sort' => $selectedSort]) }}"
                class="filter-btn {{ !$selectedTag ? 'filter-btn-active' : '' }}">
                All
            </a>

            @foreach ($tags as $tag)
                <a href="{{ route('home', ['tag' => $tag->name, 'sort' => $selectedSort]) }}"
                    class="filter-btn {{ $selectedTag === $tag->name ? 'filter-btn-active' : '' }}">
                    #{{ $tag->name }}
                </a>
            @endforeach
        </div>

        <div class="top-bar-right">
            <form method="GET" action="{{ route('home') }}" id="sort-form">
                @if ($selectedTag)
                    <input type="hidden" name="tag" value="{{ $selectedTag }}">
                @endif

                <label for="sort">Sort by:</label>
                <select id="sort" name="sort" onchange="this.form.submit()">
                    <option value="newest" {{ $selectedSort === 'newest' ? 'selected' : '' }}>Newest</option>
                    <option value="liked" {{ $selectedSort === 'liked' ? 'selected' : '' }}>Most liked</option>
                </select>
            </form>
        </div>
    </section>

    <section class="stories-grid">
        @forelse($stories as $story)
            @php
                $collectedAmount = $story->donations->sum('amount');
                $remainingAmount = max($story->goal_amount - $collectedAmount, 0);
                $progressPercent =
                    $story->goal_amount > 0 ? min(($collectedAmount / $story->goal_amount) * 100, 100) : 0;
                $likesCount = $story->likes->count();
                $userLiked = auth()->check() ? $story->likes->where('user_id', auth()->id())->count() > 0 : false;
                $isFunded = $collectedAmount >= $story->goal_amount;
            @endphp

            <article class="story-card {{ $isFunded ? 'story-card-funded' : '' }}">
                @if ($story->main_image)
                    <img src="{{ asset('storage/' . $story->main_image) }}" alt="Story image" class="story-main-image">
                @else
                    <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">
                @endif

                <div class="story-content">
                    @if (session('success') && session('success_story_id') == $story->id)
                        <p class="form-success">{{ session('success') }}</p>
                    @endif

                    @if (session('error') && session('success_story_id') == $story->id)
                        <p class="form-error">{{ session('error') }}</p>
                    @endif

                    <div class="story-top">
                        @if ($isFunded)
                            <span class="story-status story-status-funded">Funded</span>
                        @else
                            <span class="story-status">Active</span>
                        @endif

                        <span class="story-likes">{{ $likesCount }} hearts</span>
                    </div>

                    <h3>
                        <a href="{{ route('stories.show', $story) }}" class="story-title-link">
                            {{ $story->title }}
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
                        <div class="progress-fill {{ $isFunded ? 'progress-fill-funded' : '' }}"
                            style="width: {{ $progressPercent }}%;"></div>
                    </div>

                    <div class="story-tags">
                        @forelse($story->tags as $tag)
                            <a href="{{ route('home', ['tag' => $tag->name, 'sort' => $selectedSort]) }}"
                                class="story-tag-link">#{{ $tag->name }}</a>
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
            </article>
        @empty
            <p>No approved stories found for this filter.</p>
        @endforelse
    </section>
@endsection
