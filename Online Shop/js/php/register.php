<?php
	include_once('dbconnect.php');
	$data = json_decode(file_get_contents('php://input'));
	if (count($data) > 0) {
		$user_name = mysql_real_escape_string($data->user_name);
		$user_email = mysql_real_escape_string($data->user_email);
		$user_password = mysql_real_escape_string($data->user_password);
		$query = "INSERT INTO user_details VALUES ('$user_name', '$user_email', '$user_password')";
		if (mysql_query($query)) {
			echo "success";
		}
		else{
			echo "error";
		}
	}
?>
