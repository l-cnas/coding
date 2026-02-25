<!DOCTYPE html>
<html>
<head>
    <title>Skaiciu sarasas</title>
</head>
<body>

<h2>Prideti skaiciu</h2>

<form method="POST" action="{{ route('skaiciai.prideti') }}">
    @csrf
    <input type="number" name="skaicius" placeholder="Ivesk skaiciu" required>
    <button type="submit">Prideti</button>
</form>

<form method="POST" action="{{ route('skaiciai.isvalyti') }}" style="margin-top:10px;">
    @csrf
    <button type="submit">Isvalyti viska</button>
</form>

<hr>

@if(count($skaiciai))
    <h3>Skaiciai:</h3>
    <p>{{ implode(' ', $skaiciai) }}</p>
@else
    <p>Duok skaiciu nabage!</p>
@endif

</body>
</html>