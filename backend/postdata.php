<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");


$full_name = isset($_POST['full_name']) ? $_POST['full_name'] : "";
$email_address = isset($_POST['email_address']) ? $_POST['email_address'] : "";
$phone_nb = isset($_POST['phone_nb']) ? $_POST['phone_nb'] : "";
$msg = isset($_POST['msg']) ? $_POST['msg'] : "";


$query = $mysqli -> prepare(" INSERT INTO users(full_name, email_address, phone_nb, msg) VALUE (?,?,?,?)");
$query->bind_param("ssss", $full_name, $email_address, $phone_nb, $msg);
$query->execute();


echo "done";


?>