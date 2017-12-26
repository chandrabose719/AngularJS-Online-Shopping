<?php
	include_once('dbconnect.php');
	$data = json_decode(file_get_contents('php://input'));
	if (count($data) > 0) {
		$product = serialize($data->product); 
		$user_name = mysql_real_escape_string($data->user_name);
		$product = mysql_real_escape_string($product);
		$amount = mysql_real_escape_string($data->amount);
		$status = 'BENDING';
		$query = "INSERT INTO purchase_details VALUES ('$user_name', '$product', '$amount', '$status')";
		if (mysql_query($query)) {
			echo "success";
		}
		else{
			echo "error";
		}
	}
?>
