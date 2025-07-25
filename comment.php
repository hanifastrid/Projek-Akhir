<?php
require 'cors.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (
    !isset($data['spoonacular_id'], $data['name'], $data['comment']) ||
    empty(trim($data['spoonacular_id'])) ||
    empty(trim($data['name'])) ||
    empty(trim($data['comment']))
) {
    http_response_code(400);
    echo json_encode(["error" => "Semua field (id, nama, komentar) diperlukan"]);
    exit;
}

$spoonacular_id = trim($data['spoonacular_id']);
$name = trim($data['name']);
$comment = trim($data['comment']);

// Optional: Validasi panjang komentar
if (strlen($comment) < 2) {
    http_response_code(400);
    echo json_encode(["error" => "Komentar terlalu pendek"]);
    exit;
}

// Gunakan prepared statement untuk keamanan
$stmt = $conn->prepare("INSERT INTO comments (spoonacular_id, name, comment) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $spoonacular_id, $name, $comment);

if ($stmt->execute()) {
    echo json_encode(["status" => "Komentar berhasil ditambahkan"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal menyimpan komentar"]);
}

$stmt->close();
$conn->close();
?>
