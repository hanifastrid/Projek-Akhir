<?php
require 'cors.php';
header("Content-Type: application/json");

// Tangani preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "db.php";

// Ambil data dari body
$data = json_decode(file_get_contents("php://input"), true);

// Validasi wajib
if (!isset($data['spoonacular_id'])) {
    http_response_code(400);
    echo json_encode(["error" => "spoonacular_id tidak ditemukan"]);
    exit;
}

$spoonacular_id = $data['spoonacular_id'];
$title = $data['title'] ?? null;
$summary = $data['summary'] ?? null;
$image = $data['image'] ?? null;

// Pastikan ada yang mau diubah
$fields = [];
$params = [];
$types = "";

// Tambah hanya yang disediakan
if ($title !== null) {
    $fields[] = "title = ?";
    $params[] = $title;
    $types .= "s";
}
if ($summary !== null) {
    $fields[] = "summary = ?";
    $params[] = $summary;
    $types .= "s";
}
if ($image !== null) {
    $fields[] = "image = ?";
    $params[] = $image;
    $types .= "s";
}

if (empty($fields)) {
    http_response_code(400);
    echo json_encode(["error" => "Tidak ada data yang dikirim untuk diubah"]);
    exit;
}

// Cek apakah resep ada
$stmtCheck = $conn->prepare("SELECT id FROM recipes WHERE spoonacular_id = ?");
$stmtCheck->bind_param("s", $spoonacular_id);
$stmtCheck->execute();
$resultCheck = $stmtCheck->get_result();

if ($resultCheck->num_rows === 0) {
    http_response_code(404);
    echo json_encode(["error" => "Resep tidak ditemukan"]);
    exit;
}
$stmtCheck->close();

// Build prepared statement untuk update
$sql = "UPDATE recipes SET " . implode(", ", $fields) . " WHERE spoonacular_id = ?";
$params[] = $spoonacular_id;
$types .= "s";

$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$params);

if ($stmt->execute()) {
    echo json_encode(["status" => "sukses", "message" => "Resep berhasil diperbarui"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal mengupdate data"]);
}

$stmt->close();
$conn->close();
?>
