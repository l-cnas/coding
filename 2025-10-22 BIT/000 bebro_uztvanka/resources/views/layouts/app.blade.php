<!DOCTYPE html>
<html>

@php
    $pageTitle = trim($__env->yieldContent('page_title')) ?: 'My Project';
@endphp

<head>
    <title>{{ $pageTitle }}</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
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
