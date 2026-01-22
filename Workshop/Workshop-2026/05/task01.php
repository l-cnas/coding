<?php

$bool = true;
$int = 5;
$double = 5.5;
$string = "Labas";
$array = [1, 2, 3];
$object = (object) ["a" => 1];
$null = null;

echo gettype($bool) . "\n";
echo gettype($int) . "\n";
echo gettype($double) . "\n";
echo gettype($string) . "\n";
echo gettype($array) . "\n";
echo gettype($object) . "\n";
echo gettype($null) . "\n";
