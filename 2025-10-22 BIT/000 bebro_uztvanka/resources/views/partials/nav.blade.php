<nav>
    <div class="nav-inner">

        <div class="nav-left">
            <a href="http://localhost/coding/2025-10-22%20BIT/000%20bebro_uztvanka/public/">Home</a>
            <a href="#">Stories</a>
            <a href="#">Create Story</a>
        </div>

        <div class="nav-right">
            @guest
                <a href="{{ route('login') }}">Login</a>
                <a href="{{ route('register') }}">Register</a>
            @endguest

            @auth
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
