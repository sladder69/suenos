<?php
$host = "localhost";
$db   = "prueba";
$user = "root";
$pass = "";

// lo mismo que el login
$conn = new mysqli($host, $user, $pass, $db);

// lo de arriba
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$username = $_POST['nombre_usuario'];
$email = $_POST['correo'];
$password = $_POST['contrasena'];

$sql = "INSERT INTO usuarios (nombre_usuario, correo, contrasena) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    header ('Location: index.html');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
