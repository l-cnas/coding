<?php
require 'lib/functions.php';

$message = getMessage();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'delete') {
    $id = $_POST['id'] ?? '';
    $accounts = loadAccounts();
    $found = false;
    foreach ($accounts as $key => $account) {
        if ($account['id'] == $id) {
            if ($account['balance'] == 0) {
                unset($accounts[$key]);
                saveAccounts(array_values($accounts));
                redirect('index.php', MSG_ACCOUNT_DELETED);
            } else {
                redirect('index.php', MSG_CANNOT_DELETE_WITH_FUNDS);
            }
            $found = true;
            break;
        }
    }
    if (!$found) {
        redirect('index.php', MSG_ACCOUNT_NOT_FOUND);
    }
}

$accounts = loadAccounts();
$accounts = sortAccounts($accounts);
$base = '';
?>
<?php include 'parts/top.php'; ?>
        <h2>Sąskaitų sąrašas</h2>
        <?php if ($message): ?>
            <div class="message"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <table>
            <thead>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Sąskaitos numeris</th>
                    <th>Asmens kodas</th>
                    <th>Likutis</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($accounts as $account): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($account['name']); ?></td>
                        <td><?php echo htmlspecialchars($account['surname']); ?></td>
                        <td><?php echo htmlspecialchars($account['account']); ?></td>
                        <td><?php echo htmlspecialchars($account['personal_code']); ?></td>
                        <td><?php echo number_format($account['balance'], 2); ?> EUR</td>
                        <td class="actions">
                            <form method="post" style="display:inline;">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?php echo $account['id']; ?>">
                                <button type="submit" onclick="return confirm('Ar tikrai norite ištrinti šią sąskaitą?')">Ištrinti</button>
                            </form>
                            <a href="pages/add.php?id=<?php echo $account['id']; ?>">Pridėti lėšų</a>
                            <a href="pages/withdraw.php?id=<?php echo $account['id']; ?>">Nuskaičiuoti lėšas</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
<?php include 'parts/bottom.php'; ?>
