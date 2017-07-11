<?php include('data1.php'); ?>
<?php include('menu.php'); ?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
         <link rel="shortcut icon" href="img/icon.png" type="image/png">
	 <link rel="stylesheet" href="css/normalize.css">
         <link rel="stylesheet" href="css/main.css">
         <title><?php echo $title; ?></title>
    </head>
    <body>
	<?php echo $menu; ?>
        <h1><?php echo $title; ?></h1>
	<?= $postText; ?>
	<?= $datePost; ?>
    </body>
</html>