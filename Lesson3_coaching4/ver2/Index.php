<?php include('data/data.php'); ?>
<? $postId = $_GET['post']; ?>
<?$page = new Page();?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
         <link rel="shortcut icon" href="img/icon.png" type="image/png">
	     <link rel="stylesheet" href="css/normalize.css">
         <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
    <?= $page->getMenu(); ?>

    <div class="wrapper">
                   <?  if($postId==""){ ?>
                   <?= $page->getPostList() ?>
                   <?  } else{ ?>
                   <?= $page->getPost($postId) ?>
                   <?  } ?>
        </div>
    </body>
</html>


