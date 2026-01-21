<?php

// Jonas ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Jonas surenka taškų kiekį nuo 5 iki 25. Išvesti žaidėjų vardus su taškų kiekiu ir
//  “Laimėjo: laimėtojo vardas”;
// Taškų kiekį generuokite funkcija rand();
 


$zaidejasPetras = rand(10, 20);
$zaidejasJonas = rand(5, 25);
$zaidimaLaimejo = 0;

if ($zaidejasPetras < $zaidejasJonas) {
    echo 'Jonas laimejo';
} else if ($zaidejasJonas < $zaidejasPetras) {
    echo 'Petras laimejo';
} else if ($zaidejasJonas == $zaidejasPetras) {
    echo 'Rezultatas lygus';
};

?>

