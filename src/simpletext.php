<?php
	header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    header('Content-Type: image/svg+xml;charset=utf-8');
?>
<?php


    $letters = array(" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~",);
    $letters_width = array(0,4,6,8,7,11,9,3,4,4,6,7.015625,3.34375,5,3.34375,5,7,6.6875,7,7,8,7,7,7,7,7,4,4,7.015625,7.015625,7.015625,8,12,10,9,9,9,8.015625,7.34375,9.34375,8.671875,3.34375,7.6875,9,8,10,8.671875,10,8.015625,10,9,8.015625,9,8.671875,10,13,10,10,9,5,5,5,7.015625,9,5,7,8,7,7.34375,7,6,7.34375,7,3.34375,11,7.34375,8,8,7.34375,6,7,6,7.34375,8,11,8,8,7,5,3.359375,5,7.015625);

    $uri_txt=$_SERVER['REQUEST_URI'];

    $token = strtok($uri_txt, "?");
    $token = strtok("?");

    $text = strtok($token,"-");
    $color =  strtok("-");

    $tmpText= strtok($text,"_");
    $final_text=""; 

    while ($tmpText !== false){
        $final_text = $final_text ." ".$tmpText;
        $tmpText =strtok("_");
    }

    $tmpW=0;

    for($b=0; $b<strlen($final_text); $b++){
        for($a=0; $a<count($letters); $a++ ){
             if($final_text[$b]==$letters[$a]){
                $tmpW+=$letters_width[$a];
            }
        }
    }

?>
<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="20" role="img">
    <title>release: v1.1.2</title>  
    <style>
    .small {
      font: bold 12px sans-serif;
    }

  </style>
  
  <g>
    <rect x="0" width="<?php echo($tmpW+20);?>" height="20px" rx="3" fill="<?php echo ($color);?>" id="rect1"/>
    <text x="10px" y="14px" class="small" id="text1" fill="white"><?php echo ($final_text);?></text>
  </g>
  
</svg>
