<!DOCTYPE html>
<html>

@php
    $pageTitle = trim($__env->yieldContent('page_title')) ?: 'My Project';
@endphp

<head>
    <title>{{ $pageTitle }}</title>
    @vite(['resources/js/app.js'])
</head>

<body>

    @include('partials.header', ['pageTitle' => $pageTitle])
    @include('partials.nav')

    <main>
        @yield('content')
    </main>

    @include('partials.footer')

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
