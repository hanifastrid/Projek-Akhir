<?php
require 'cors.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['spoonacular_id'])) {
    http_response_code(400);
    echo json_encode(["error" => "spoonacular_id diperlukan"]);
    exit;
}

$spoonacular_id = $conn->real_escape_string($data['spoonacular_id']);

// 1️⃣ Simpan ke tabel feedback_likes
$insert_sql = "INSERT INTO feedback_likes (spoonacular_id) VALUES ('$spoonacular_id')";

// 2️⃣ Tambah like di tabel recipes
$update_sql = "UPDATE recipes SET likes = likes + 1 WHERE spoonacular_id = '$spoonacular_id'";

if ($conn->query($insert_sql) && $conn->query($update_sql)) {
    echo json_encode(["status" => "liked", "spoonacular_id" => $spoonacular_id]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal menyimpan feedback"]);
}

$conn->close();
?>
