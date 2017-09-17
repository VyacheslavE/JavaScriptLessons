<? 
include('posts.php');
include('menu.php');

$data = (object) [
        'posts' => $posts,
        'menu' => $menu
];

?>


<nav id="topMenu">
<ul>
<? foreach($data -> menu as $item):  ?>
<li>
    <a href="<?= $item['link']?>"><?= $item['name'] ?></a>
</li>
<? endforeach; ?>
    </ul>
</nav>
 
 


