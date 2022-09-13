<?php

include("connection.php");


$full_name = isset($_POST['full_name']) ? $_POST['full_name'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$password = isset($_POST['password']) ? $_POST['password'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";


$query = $mysqli -> prepare(" INSERT INTO users(full_name, email, password, message) VALUE (?,?,?,?)");
$query->bind_param("ssss", $full_name, $email, $password, $message);
$query->execute();



echo "done";


?>