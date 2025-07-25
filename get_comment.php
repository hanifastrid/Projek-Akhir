<?php
require 'cors.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "db.php";

if (!isset($_GET['spoonacular_id']) || empty(trim($_GET['spoonacular_id']))) {
    http_response_code(400);
    echo json_encode(["error" => "Parameter spoonacular_id diperlukan"]);
    exit;
}

$spoonacular_id = $conn->real_escape_string(trim($_GET['spoonacular_id']));
$sql = "SELECT name, comment, created_at FROM comments WHERE spoonacular_id = '$spoonacular_id' ORDER BY created_at DESC";
$result = $conn->query($sql);

$comments = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }
    echo json_encode($comments);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal mengambil komentar"]);
}

$conn->close();
?>
