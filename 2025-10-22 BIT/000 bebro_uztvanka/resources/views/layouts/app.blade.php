<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

@include('partials.header')
@include('partials.nav')

<main>
    @yield('content')
</main>

@include('partials.footer')

</body>
</html>