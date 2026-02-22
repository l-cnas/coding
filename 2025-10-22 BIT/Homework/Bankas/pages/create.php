<?php
require '../lib/functions.php';

$message = getMessage();
$iban = generateIBAN();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $surname = trim($_POST['surname'] ?? '');
    $personal_code = trim($_POST['personal_code'] ?? '');
    $account = $iban; // Since readonly, use the generated IBAN

    $errors = [];
    if (!validateName($name)) {
        $errors[] = MSG_NAME_TOO_SHORT;
    }
    if (!validateName($surname)) {
        $errors[] = MSG_SURNAME_TOO_SHORT;
    }
    if (!validatePersonalCode($personal_code)) {
        $errors[] = MSG_INVALID_PERSONAL_CODE;
    }
    $accounts = loadAccounts();
    foreach ($accounts as $acc) {
        if ($acc['personal_code'] === $personal_code) {
            $errors[] = MSG_PERSONAL_CODE_EXISTS;
            break;
        }
    }

    if (empty($errors)) {
        $newAccount = [
            'id' => uniqid(),
            'name' => $name,
            'surname' => $surname,
            'account' => $account,
            'personal_code' => $personal_code,
            'balance' => 0.00
        ];
        $accounts[] = $newAccount;
        saveAccounts($accounts);
        redirect('../index.php', MSG_ACCOUNT_CREATED);
    } else {
        $message = implode(' ', $errors);
    }
}
$base = '../';
?>
<?php include '../parts/top.php'; ?>
        <h2>Nauja sąskaita</h2>
        <?php if ($message): ?>
            <div class="error"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <form method="post">
            <label>Vardas: <input type="text" name="name" placeholder="Įveskite vardą (daugiau nei 3 simboliai)" required></label>
            <label>Pavardė: <input type="text" name="surname" placeholder="Įveskite pavardę (daugiau nei 3 simboliai)" required></label>
            <label>Asmens kodas: <input type="text" name="personal_code" placeholder="11 skaitmenų asmens kodas" required></label>
            <label>Sąskaitos numeris: <input type="text" name="account" value="<?php echo htmlspecialchars($iban); ?>" readonly required></label>
            <button type="submit">Sukurti</button>
        </form>
        <p><small>Asmens kodas turi būti 11 skaitmenų ir atitikti Lietuvos asmens kodo taisykles. Sąskaitos numeris generuojamas automatiškai.</small></p>
<?php include '../parts/bottom.php'; ?>