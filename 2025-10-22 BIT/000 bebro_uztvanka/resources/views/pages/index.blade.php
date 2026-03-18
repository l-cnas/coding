{{-- @extends('layouts.app')

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

        <article class="story-card">
            <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">

            <div class="story-content">
                <div class="story-top">
                    <span class="story-status active">Active</span>
                    <span class="story-likes">18 hearts</span>
                </div>

                <h3>Help fund a local animal rescue space</h3>

                <p class="story-text">
                    We want to prepare a safe temporary shelter for injured and abandoned animals.
                    Funds will go to equipment, food, and veterinary support.
                </p>

                <div class="story-gallery">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                </div>

                <div class="story-money">
                    <div><strong>Goal:</strong> 2500 €</div>
                    <div><strong>Collected:</strong> 1320 €</div>
                    <div><strong>Remaining:</strong> 1180 €</div>
                </div>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: 53%;"></div>
                </div>

                <div class="story-tags">
                    <span>#animals</span>
                    <span>#rescue</span>
                    <span>#community</span>
                </div>

                <div class="donation-history">
                    <h4>Donation history</h4>
                    <ul>
                        <li>Jonas - 20 €</li>
                        <li>Ieva - 50 €</li>
                        <li>Tomas - 100 €</li>
                    </ul>
                </div>

                <div class="story-actions">
                    <input type="number" placeholder="Amount">
                    <button>Donate</button>
                    <button>Heart</button>
                </div>
            </div>
        </article>

        <article class="story-card">
            <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">

            <div class="story-content">
                <div class="story-top">
                    <span class="story-status active">Active</span>
                    <span class="story-likes">42 hearts</span>
                </div>

                <h3>Community workshop for young programmers</h3>

                <p class="story-text">
                    We are building a small local workshop where students can learn web development,
                    programming basics, and teamwork through practical projects.
                </p>

                <div class="story-gallery">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                </div>

                <div class="story-money">
                    <div><strong>Goal:</strong> 4000 €</div>
                    <div><strong>Collected:</strong> 2950 €</div>
                    <div><strong>Remaining:</strong> 1050 €</div>
                </div>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: 74%;"></div>
                </div>

                <div class="story-tags">
                    <span>#education</span>
                    <span>#coding</span>
                    <span>#future</span>
                </div>

                <div class="donation-history">
                    <h4>Donation history</h4>
                    <ul>
                        <li>Laura - 15 €</li>
                        <li>Mantas - 75 €</li>
                        <li>Paulius - 150 €</li>
                    </ul>
                </div>

                <div class="story-actions">
                    <input type="number" placeholder="Amount">
                    <button>Donate</button>
                    <button>Heart</button>
                </div>
            </div>
        </article>

        <article class="story-card funded">
            <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">

            <div class="story-content">
                <div class="story-top">
                    <span class="story-status funded-badge">Funded</span>
                    <span class="story-likes">66 hearts</span>
                </div>

                <h3>Wheelchair-accessible entrance for a local center</h3>

                <p class="story-text">
                    This project reached its goal and the funding is complete. Thank you to everyone
                    who contributed and helped make it happen.
                </p>

                <div class="story-gallery">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                    <img src="https://placehold.co/100x70" alt="">
                </div>

                <div class="story-money">
                    <div><strong>Goal:</strong> 3000 €</div>
                    <div><strong>Collected:</strong> 3000 €</div>
                    <div><strong>Remaining:</strong> 0 €</div>
                </div>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: 100%;"></div>
                </div>

                <div class="story-tags">
                    <span>#community</span>
                    <span>#accessibility</span>
                </div>

                <div class="donation-history">
                    <h4>Donation history</h4>
                    <ul>
                        <li>Rasa - 25 €</li>
                        <li>Andrius - 100 €</li>
                        <li>Anonymous - 500 €</li>
                    </ul>
                </div>

                <p class="funded-text">Target reached. Donations are closed.</p>
            </div>
        </article>

    </section>
@endsection --}}


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
            <article class="story-card">
                @if ($story->main_image)
                    <img src="{{ asset('storage/' . $story->main_image) }}" alt="Story image" class="story-main-image">
                @else
                    <img src="https://placehold.co/600x350" alt="Story image" class="story-main-image">
                @endif

                <div class="story-content">
                    <div class="story-top">
                        <span class="story-status">Active</span>
                        <span class="story-likes">0 hearts</span>
                    </div>

                    <h3>Story #{{ $story->id }}</h3>

                    <p class="story-text">
                        {{ $story->content }}
                    </p>

                    <div class="story-money">
                        <div><strong>Goal:</strong> {{ number_format($story->goal_amount, 2) }} €</div>
                        <div><strong>Collected:</strong> 0 €</div>
                        <div><strong>Remaining:</strong> {{ number_format($story->goal_amount, 2) }} €</div>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%;"></div>
                    </div>

                    <div class="story-tags">
                        <span>#story</span>
                    </div>

                    <div class="donation-history">
                        <h4>Donation history</h4>
                        <ul>
                            <li>No donations yet</li>
                        </ul>
                    </div>

                    <div class="story-actions">
                        <input type="number" placeholder="Amount">
                        <button>Donate</button>
                        <button>Heart</button>
                    </div>
                </div>
            </article>
        @empty
            <p>No approved stories yet.</p>
        @endforelse
    </section>
@endsection
