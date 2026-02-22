<?php
// functions.php

define('DATA_FILE', __DIR__ . '/../data/accounts.json');
define('BANK_NAME', 'Bankas');
define('BANK_LOGO', 'https://via.placeholder.com/50x50?text=Bank');
define('BANK_IBAN_PREFIX', 'LT');
define('BANK_IBAN_LENGTH', 18);
define('PERSONAL_CODE_LENGTH', 11);
define('PERSONAL_CODE_WEIGHTS', [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]);
define('PERSONAL_CODE_ALT_WEIGHTS', [3, 4, 5, 6, 7, 8, 9, 1, 2, 3]);
define('NAME_MIN_LENGTH', 3);

// Messages
define('MSG_NAME_TOO_SHORT', 'Vardas turi būti ilgesnis nei ' . NAME_MIN_LENGTH . ' simboliai.');
define('MSG_SURNAME_TOO_SHORT', 'Pavardė turi būti ilgesnė nei ' . NAME_MIN_LENGTH . ' simboliai.');
define('MSG_INVALID_PERSONAL_CODE', 'Neteisingas asmens kodas.');
define('MSG_PERSONAL_CODE_EXISTS', 'Asmens kodas jau egzistuoja.');
define('MSG_ACCOUNT_CREATED', 'Sąskaita sukurta sėkmingai.');
define('MSG_ACCOUNT_DELETED', 'Sąskaita ištrinta sėkmingai.');
define('MSG_CANNOT_DELETE_WITH_FUNDS', 'Negalima ištrinti sąskaitos su lėšomis.');
define('MSG_ACCOUNT_NOT_FOUND', 'Sąskaita nerasta.');
define('MSG_AMOUNT_TOO_LOW', 'Suma turi būti teigiama.');
define('MSG_INSUFFICIENT_FUNDS', 'Nepakanka lėšų.');
define('MSG_FUNDS_ADDED', 'Lėšos pridėtos sėkmingai.');
define('MSG_FUNDS_WITHDRAWN', 'Lėšos nuskaičiuotos sėkmingai.');

function loadAccounts() {
    if (!file_exists(DATA_FILE)) {
        return [];
    }
    $data = file_get_contents(DATA_FILE);
    return json_decode($data, true) ?: [];
}

function saveAccounts($accounts) {
    file_put_contents(DATA_FILE, json_encode($accounts, JSON_PRETTY_PRINT));
}

function generateIBAN() {
    // Lithuanian IBAN: LT + 18 digits
    $digits = '';
    for ($i = 0; $i < BANK_IBAN_LENGTH; $i++) {
        $digits .= rand(0, 9);
    }
    return BANK_IBAN_PREFIX . $digits;
}

function validatePersonalCode($code) {
    if (!preg_match('/^\d{' . PERSONAL_CODE_LENGTH . '}$/', $code)) {
        return false;
    }
    // Checksum calculation
    $weights = PERSONAL_CODE_WEIGHTS;
    $sum = 0;
    for ($i = 0; $i < 10; $i++) {
        $sum += $code[$i] * $weights[$i];
    }
    $checksum = $sum % 11;
    if ($checksum == 10) {
        $weights = PERSONAL_CODE_ALT_WEIGHTS;
        $sum = 0;
        for ($i = 0; $i < 10; $i++) {
            $sum += $code[$i] * $weights[$i];
        }
        $checksum = $sum % 11;
        if ($checksum == 10) {
            $checksum = 0;
        }
    }
    return $checksum == (int)$code[10];
}

function validateName($name) {
    return strlen(trim($name)) > NAME_MIN_LENGTH;
}

function sortAccounts($accounts) {
    usort($accounts, function($a, $b) {
        return strcmp($a['surname'], $b['surname']);
    });
    return $accounts;
}

function getMessage() {
    if (isset($_GET['msg'])) {
        return $_GET['msg'];
    }
    return '';
}

function redirect($url, $msg = '') {
    if ($msg) {
        $url .= (strpos($url, '?') === false ? '?' : '&') . 'msg=' . urlencode($msg);
    }
    header("Location: $url");
    exit;
}
?>