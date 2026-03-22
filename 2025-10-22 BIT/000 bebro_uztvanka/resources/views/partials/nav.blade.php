<nav>
    <div class="nav-inner">

        <div class="nav-left">
            <a href="{{ route('home') }}">Home</a>
            <a href="#">Stories</a>

            @auth
                @if (auth()->user()->is_admin)
                    <a href="{{ route('stories.create') }}">Create Story</a>
                @else
                    @php
                        $storyCount = \App\Models\Story::where('user_id', auth()->user()->id)->count();
                    @endphp

                    @if ($storyCount < auth()->user()->story_limit)
                        <a href="{{ route('stories.create') }}">Create Story</a>
                    @endif
                @endif
            @endauth
        </div>

        <div class="nav-right">
            @guest
                <a href="{{ route('login') }}">Login</a>
                <a href="{{ route('register') }}">Register</a>
            @endguest

            @auth
                @if (auth()->user()->is_admin)
                    <a href="{{ route('admin.dashboard') }}">Administration</a>
                @endif
                <div class="user-box">
                    <span class="user-label">Logged in as:</span>
                    <span class="user-name">{{ auth()->user()->name }}</span>
                </div>

                <a href="{{ route('settings') }}" class="icon-button">
                    <img src="{{ asset('icons/settings.svg') }}" class="nav-icon" alt="settings">
                </a>

                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="logout-button">
                        <img src="{{ asset('icons/logout.svg') }}" class="nav-icon" alt="logout">
                    </button>
                </form>
            @endauth

            <button id="theme-toggle" class="theme-button">
                <img src="{{ asset('icons/lightbulb.svg') }}" id="theme-icon" alt="theme">
            </button>
        </div>

    </div>
</nav>
