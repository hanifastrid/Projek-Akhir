<?php
// Use environment variables for Docker compatibility
$host = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?? 'localhost';
$user = $_ENV['DB_USER'] ?? getenv('DB_USER') ?? 'root';
$pass = $_ENV['DB_PASSWORD'] ?? getenv('DB_PASSWORD') ?? '';
$db   = $_ENV['DB_NAME'] ?? getenv('DB_NAME') ?? 'recipes_db';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Koneksi database gagal: " . $conn->connect_error]);
    exit;
}
?>
