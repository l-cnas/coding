<?php

echo 'Uzdavinys 1.';

$vardas = 'Linas';
$pavarde = 'Pavardenis';
$gimimoMetai = new DateTime("1903-10-28");
$currentDate = new DateTime();

$amzius = $gimimoMetai->diff($currentDate)->y;

echo "$vardas $pavarde jus esate $amzius metu.";

// ------------------------------ 2.

echo "<br><br> Uzdavinys 2.<br>";

$uz2KintamasisVienas = rand(0, 4);
$uz2KintamasisDu = rand(0, 4);


if ($uz2KintamasisVienas == 0 || $uz2KintamasisDu == 0) {
    echo 'Dalyba is nulio.';
} else if ($uz2KintamasisVienas > $uz2KintamasisDu) {
    $print = round($uz2KintamasisVienas / $uz2KintamasisDu, 2);
    echo "Rezultatas : $print";
} else if ($uz2KintamasisVienas < $uz2KintamasisDu) {
    $print = round($uz2KintamasisDu / $uz2KintamasisVienas, 2);
    echo "Rezultatas : $print";
} else {
    echo 'Skaiciai vienodi.';
};


// ------------------------------ 3.

echo "<br><br> Uzdavinys 3. <br>";

function trys($a, $b)
{
    $masyvas = [];

    for ($i = 0; count($masyvas) < 3; $i++) {
        $masyvas[] = rand($a, $b);
    };

    sort($masyvas);
    echo $masyvas[1];
};

trys(0, 25);

// ------------------------------ 4.

echo "<br><br> Uzdavinys 4. <br>";

$a = rand(1, 10);
$b = rand(1, 10);
$c = rand(1, 10);

echo "a = $a, b = $b, c = $c<br>";

if ($a + $b > $c && $a + $c > $b && $b + $c > $a) {
    echo "Galima sudaryti trikampi.";
} else {
    echo "Negalima sudaryti trikampio.";
}


// ------------------------------ 5.

echo "<br><br> Uzdavinys 5. <br>";

$uz5a = rand(0, 2);
$uz5b = rand(0, 2);
$uz5c = rand(0, 2);
$uz5d = rand(0, 2);

$uz5Nuliai = 0;
$uz5Vienetai = 0;
$uz5Dvejetai = 0;

if ($uz5a == 0) {
    $uz5Nuliai++;
} else if ($uz5a == 1) {
    $uz5Vienetai++;
} else if ($uz5a == 2) {
    $uz5Dvejetai++;
};

if ($uz5b == 0) {
    $uz5Nuliai++;
} else if ($uz5b == 1) {
    $uz5Vienetai++;
} else if ($uz5b == 2) {
    $uz5Dvejetai++;
};

if ($uz5c == 0) {
    $uz5Nuliai++;
} else if ($uz5c == 1) {
    $uz5Vienetai++;
} else if ($uz5c == 2) {
    $uz5Dvejetai++;
};

if ($uz5d == 0) {
    $uz5Nuliai++;
} else if ($uz5d == 1) {
    $uz5Vienetai++;
} else if ($uz5d == 2) {
    $uz5Dvejetai++;
};

echo "Gauta nuliu: $uz5Nuliai , vienetu: $uz5Vienetai , dvejetu: $uz5Dvejetai .";

// ------------------------------ 6.

echo "<br><br> Uzdavinys 6. <br>";

$uz6Kintamasis = rand(1, 6);

echo "<h$uz6Kintamasis>$uz6Kintamasis</h$uz6Kintamasis>";


// ------------------------------ 7.

echo "<br><br> Uzdavinys 7. <br>";



function spalvink($a, $b)
{
    $i = -1;
    $u7Masyvas = [];
    while (count($u7Masyvas) < 3) {
        $i++;
        $u7Masyvas[] = rand($a, $b);
        if ($u7Masyvas[$i] < 0) {
            echo "<span style='color:green'>{$u7Masyvas[$i]}</span><br>";
        } else if ($u7Masyvas[$i] > 0) {
            echo "<span style='color:blue'>{$u7Masyvas[$i]}</span><br>";
        } else {
            echo "<span style='color:red'>{$u7Masyvas[$i]}</span><br>";
        };
    };
};

spalvink(-10, 10);


// ------------------------------ 8.

echo "<br><br> Uzdavinys 8. <br>";



function u8Zvakes($a, $b)
{
    $u8ZvakiuSkaicius = rand($a, $b);
    if ($u8ZvakiuSkaicius < 1000) {
        echo "Perkama $u8ZvakiuSkaicius zvakes uz $u8ZvakiuSkaicius eur.";
    } else if ($u8ZvakiuSkaicius > 1000 && $u8ZvakiuSkaicius < 2000) {
        echo 'Perkama ' . $u8ZvakiuSkaicius . 'zvakes uz ' . ($u8ZvakiuSkaicius * 0.97) . ' eur. Su 3% nuolaida.';
    } else {
        echo 'Perkama ' . $u8ZvakiuSkaicius . 'zvakes uz ' . ($u8ZvakiuSkaicius * 0.96) . ' eur. Su 4% nuolaida.';
    };
};

u8Zvakes(5, 3000);

// ------------------------------ 9.

echo "<br><br> Uzdavinys 9. <br>";

$u9sk1 = rand(0, 100);
$u9sk2 = rand(0, 100);
$u9sk3 = rand(0, 100);

$numbers = [$u9sk1, $u9sk2, $u9sk3];

$avg1 = array_sum($numbers) / count($numbers);

$filtered = [];

foreach ($numbers as $n) {
    if ($n >= 10 && $n <= 90) {
        $filtered[] = $n;
    }
}

if (count($filtered) > 0) {
    $avg2 = array_sum($filtered) / count($filtered);
} else {
    $avg2 = "nėra reikšmių";
}

echo "Skaičiai: " . implode(", ", $numbers) . "<br>";
echo "Pirmas vidurkis: " . round($avg1) . "<br>";
echo "Antras vidurkis: ";

if (is_numeric($avg2)) {
    echo round($avg2);
} else {
    echo $avg2;
}


// ------------------------------ 10.

echo "<br><br> Uzdavinys 10. <br>";

$h = rand(0, 23);
$m = rand(0, 59);
$s = rand(0, 59);

$addSeconds = rand(0, 300);

$beforeTotal = $h * 3600 + $m * 60 + $s;
$afterTotal = ($beforeTotal + $addSeconds) % (24 * 3600);

$before = sprintf("%02d:%02d:%02d", $h, $m, $s);

$afterH = intdiv($afterTotal, 3600);
$afterM = intdiv($afterTotal % 3600, 60);
$afterS = $afterTotal % 60;

$after = sprintf("%02d:%02d:%02d", $afterH, $afterM, $afterS);

echo "Laikrodis pries: $before<br>";
echo "Pridedamos sekundes: $addSeconds<br>";
echo "Laikrodis po: $after<br>";


// ------------------------------ 11.

echo "<br><br> Uzdavinys 11. <br>";


echo "<br><br> i am confusion... <br>";