<?php
    $nombre = $_GET["nombre"];
    $email = $_GET["email"];
    $telefono = $_GET["telefono"];
    $tiposhow = $_GET["tiposhow"];
    $mail_body = "Hola rr: ".$nombre.", uso el form de contacto
Su Telefono: $telefono
Su email: $email
Tipo de show elegido: $tiposhow";
    $header = "From:$email\r\nBcc:cfrasan@gmail.com";
    mail("rr@raforaez.com,rraez@yahoo.com", "[Contacto]", $mail_body,$header);

?>