<?php
	$hostname ='localhost';
    $username ='root';
    $password ='';
    $database ='angular_product';
    $connection = mysql_connect($hostname, $username, $password) or die('Could not connect Mysql');
    mysql_select_db($database, $connection) or die('Could not Select DataBase');
?>