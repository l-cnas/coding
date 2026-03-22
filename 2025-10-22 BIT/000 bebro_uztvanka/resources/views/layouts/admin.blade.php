<!DOCTYPE html>
<html>

<head>
    <title>@yield('page_title', 'Admin Panel')</title>
    @vite(['resources/js/app.js'])
</head>

<body>

    @include('partials.header', ['pageTitle' => trim($__env->yieldContent('page_title')) ?: 'Admin Panel'])
    @include('partials.nav')

    <main>
        <div class="admin-panel">
            <aside class="admin-sidebar">
                <h3>Admin Dashboard</h3>

                <a href="{{ route('admin.dashboard') }}">Dashboard</a>
                <a href="{{ route('admin.stories') }}">Stories Approval</a>
                <a href="{{ route('admin.users') }}">Stories Per User</a>
                <a href="{{ route('admin.users') }}">User List</a>
            </aside>

            <section class="admin-main">
                @yield('admin_content')
            </section>
        </div>
    </main>

    @include('partials.footer')

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
