<!DOCTYPE html>
<html>
<head>
    <title>POST Sumatorius</title>
</head>
<body>

<h2>Sumatorius (POST)</h2>

<form method="POST" action="{{ route('post.suma.skaiciuoti') }}">
    @csrf

    <input type="number" name="a" placeholder="Pirmas skaičius">
    <input type="number" name="b" placeholder="Antras skaičius">

    <button type="submit">Skaičiuoti</button>
</form>

</body>
</html>