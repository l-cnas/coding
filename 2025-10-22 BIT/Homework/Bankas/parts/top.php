<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title><?php echo BANK_NAME; ?></title>
    <link rel="stylesheet" href="<?php echo ($base ?? '') . 'css/style.css'; ?>">
</head>
<body>
    <header>
        <div class="logo">
            <img src="<?php echo BANK_LOGO; ?>" alt="Bank Logo">
            <h1><?php echo BANK_NAME; ?></h1>
        </div>
        <nav>
            <a href="<?php echo $base ?? ''; ?>index.php">Sąskaitų sąrašas</a>
            <a href="<?php echo $base ?? ''; ?>pages/create.php">Nauja sąskaita</a>
        </nav>
    </header>
    <div class="container">