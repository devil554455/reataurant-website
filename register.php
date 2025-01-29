<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$pass')";
    
    if (mysqli_query($conn, $sql)) {
        // If registration is successful, redirect to the login page
        header("Location: login.html");
        exit(); // Always call exit() after a header redirect
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

$conn->close();
?>
