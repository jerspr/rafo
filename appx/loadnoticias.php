<?php
$xml = simplexml_load_file('http://raforaez.blogspot.com/feeds/posts/default');
$i=0;
$html = "";
foreach($xml->entry as $l){
	$url = $l->link[4];
	$link = $url->attributes()->href;

	$html .= '<div class="noticias rojo">
	<a target="_blank" href="'.$link.'">'.$l->title.'</a>
</div>
<div class="noticias verde linea-baja">
	<a target="_blank" href="'.$link.'">'.$l->summary.'</a>
	<a class="noticias-mas" target="_blank" href="'.$link.'">Ver más</a>
</div>
';
	
	$i++;
	if($i==2) break;
}
file_put_contents("../notas.html",$html)  or die("error");
?>
