<?php
	include_once('dbconnect.php');
	$input_data = json_decode(file_get_contents('php://input'));
	if (count($input_data) > 0) {
		$user_email = mysql_real_escape_string($input_data->user_email);
		$user_password = mysql_real_escape_string($input_data->user_password);
		$query = "SELECT user_email, user_password FROM user_details WHERE user_email = '$user_email' && user_password = '$user_password'";
		$result = mysql_query($query);
		$output_data = array();
		while ($row = mysql_fetch_array($result)) {
			$output_data[] = array("user_email"=>$row['user_email'], "user_password"=>$row['user_password']);
		}
		echo json_encode($output_data);
	}
	else{
		echo 'Data Empty';
	}
?>
