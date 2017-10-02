<? 


class Page{
        private $posts;
        private $menu;  
    
    public function __construct(){
        
        include('menu.php');
        include('posts.php');
        
        $this -> menu = $menu;
        $this -> posts = $posts;
    }
    
    public function getMenu(){
        $html = '<div id="topMenu">';
        $html .= '<nav>';
        $html .= '<ul>';
        foreach($this -> menu as $item){
        $html .= '<li>';
        $html .= '<a href="' . $item['link'] . '">' . $item['name'] . '</a>';
        $html .= '</li>';
        }
        $html .= '</ul>';
        $html .= '</nav>';
        $html .= '</div>';
        
    return $html;
  }
    
   public function  getPostList($postId){
       $html = '<div class="nav2">';
        if($postId==""){ 
           foreach($this -> posts as $key1 => $item1){
           $html .= '<div class="nav2Inside"><a href=' . '?post=' . $key1 . ' <strong>' . $item1['title'] . '</strong>' . '</a></div>';
            }
        }

            else{
               $html .= '<h1>' . $this -> posts[$postId]['title'] . '</h1>';
               $html .= '<p><em>' . $this -> posts[$postId]['datePost'] . '</em></p>';
               $html .= '<div>' . $this -> posts[$postId]['postText'] . '</div>';
            }
       $html .= '</div>';
        
    return $html;
   }
    
};

?>


 
 


