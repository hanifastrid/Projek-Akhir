<?php
require 'cors.php';
require 'db.php';

// Ambil data JSON dari body request
$data = json_decode(file_get_contents("php://input"), true);

// Validasi input
if (!isset($data['spoonacular_id'])) {
    http_response_code(400);
    echo json_encode(["error" => "ID tidak ditemukan"]);
    exit;
}

// Sanitasi ID
$spoonacular_id = $conn->real_escape_string($data['spoonacular_id']);

// Hapus dari database
$sql = "DELETE FROM recipes WHERE spoonacular_id = '$spoonacular_id'";
if (!$conn->query($sql)) {
    http_response_code(500);
    echo json_encode(["error" => "Gagal menghapus dari database"]);
    exit;
}

// Jika ada file JSON eksternal (opsional)
$jsonFile = 'resep-db.json';
if (file_exists($jsonFile)) {
    $existingData = json_decode(file_get_contents($jsonFile), true) ?: [];

    // Filter data yang tidak cocok dengan ID
    $filtered = array_filter($existingData, fn($item) => $item['spoonacular_id'] != $spoonacular_id);

    // Simpan ulang ke file JSON
    file_put_contents($jsonFile, json_encode(array_values($filtered), JSON_PRETTY_PRINT));
}

// Kirim respon sukses
echo json_encode([
    "status" => "dihapus",
    "spoonacular_id" => $spoonacular_id
]);
?>
