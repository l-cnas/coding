<!DOCTYPE html>
<html>
<head>
    <title>Rezultatas</title>
</head>
<body>

@if(session()->has('rezultatas'))
    <h1>
        {{ session('a') }} + {{ session('b') }} = {{ session('rezultatas') }}
    </h1>
@else
    <h1>Nėra duomenų</h1>
@endif

<a href="{{ route('post.suma.forma') }}">Grįžti atgal</a>

</body>
</html>