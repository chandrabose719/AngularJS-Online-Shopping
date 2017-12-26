<?php
	include_once('dbconnect.php');
	$query = "SELECT * FROM product_details";
	$result = mysql_query($query);
	$data = array();
	while ($row = mysql_fetch_array($result)) {
		$data[] = array("product_id"=>$row['product_id'], "product_name"=>$row['product_name'], "product_cost"=>$row['product_cost']);
	}
	echo json_encode($data);
?>
