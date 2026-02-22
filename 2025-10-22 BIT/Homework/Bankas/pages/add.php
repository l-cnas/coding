<?php
require '../lib/functions.php';

$message = getMessage();
$id = $_GET['id'] ?? '';
$accounts = loadAccounts();
$account = null;
foreach ($accounts as $acc) {
    if ($acc['id'] == $id) {
        $account = $acc;
        break;
    }
}
if (!$account) {
    redirect('index.php', 'Sąskaita nerasta.');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $amount = floatval($_POST['amount'] ?? 0);
    if ($amount <= 0) {
        $message = MSG_AMOUNT_TOO_LOW;
    } else {
        $account['balance'] += $amount;
        foreach ($accounts as &$acc) {
            if ($acc['id'] == $id) {
                $acc = $account;
                break;
            }
        }
        saveAccounts($accounts);
        redirect('../index.php', MSG_FUNDS_ADDED);
    }
}
$base = '../';
?>
<?php include '../parts/top.php'; ?>
        <h2>Pridėti lėšų</h2>
        <?php if ($message): ?>
            <div class="error"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <p><strong>Savininkas:</strong> <?php echo htmlspecialchars($account['name'] . ' ' . $account['surname']); ?></p>
        <p><strong>Likutis:</strong> <?php echo number_format($account['balance'], 2); ?> EUR</p>
        <form method="post">
            <label>Suma: <input type="number" name="amount" step="0.01" min="0.01" placeholder="Įveskite sumą EUR" required></label>
            <button type="submit">Pridėti</button>
        </form>
<?php include '../parts/bottom.php'; ?>