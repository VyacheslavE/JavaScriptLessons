<?php include('data/data.php'); ?>
<? $postId = $_GET['post']; ?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
         <link rel="shortcut icon" href="img/icon.png" type="image/png">
	     <link rel="stylesheet" href="css/normalize.css">
         <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
    <div class="wrapper">
       <div class="nav2">
             <? if($postId==""){ ?>
                <? foreach($data -> posts  as $key1 => $item1): ?>
           <div class="nav2Inside"><a href='?post=<?= $key1 ?>'> <strong><?= $item1['title'] ?></strong> <br> <?= $item1['titlePage'] ?> </a></div>
            <? endforeach;?>

            <? } else {?>            
               <h1><?= $data -> posts[$postId]['title'] ?></h1>
               <p><em><?= $data -> posts[$postId]['datePost'] ?></em></p>
               <div><?= $data -> posts[$postId]['postText'] ?></div>
            <? } ?>
        </div>
        <div class="nav2" id="n2">
        
        </div>
        </div>
    </body>
</html>