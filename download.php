<?php
    $f = $_GET["file"];
    header("Content-type: application/octet-stream");
    header("Content-Disposition: attachment; filename=\"$f\"\n");
    $fp=fopen("$f", "r");
    fpassthru($fp);
?>