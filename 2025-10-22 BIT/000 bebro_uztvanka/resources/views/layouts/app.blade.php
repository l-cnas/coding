<!DOCTYPE html>
<html>

<head>
    <title>@yield('page_title', 'My Project')</title>
    @vite(['resources/js/app.js'])
</head>

<body>

    @include('partials.header', ['pageTitle' => trim($__env->yieldContent('page_title')) ?: 'My Project'])
    @include('partials.nav')

    <main>
        @yield('content')
    </main>

    @include('partials.footer')

</body>

</html>
