<?php
require 'cors.php';
require 'db.php';

// Ambil dan decode data JSON dari body request
$data = json_decode(file_get_contents("php://input"), true);

// Validasi data yang diperlukan
if (
    !isset($data['title']) ||
    !isset($data['summary']) ||
    !isset($data['image']) ||
    !isset($data['spoonacular_id'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Data tidak lengkap"]);
    exit;
}

// Sanitasi input
$title = $conn->real_escape_string($data['title']);
$summary = $conn->real_escape_string($data['summary']);
$image = $conn->real_escape_string($data['image']);
$spoonacular_id = $conn->real_escape_string($data['spoonacular_id']);

// Cek apakah resep sudah ada berdasarkan spoonacular_id
$check = $conn->query("SELECT id FROM recipes WHERE spoonacular_id = '$spoonacular_id'");
if ($check && $check->num_rows > 0) {
    http_response_code(409);
    echo json_encode(["error" => "Resep sudah tersimpan sebelumnya."]);
    exit;
}

// Query simpan data
$sql = "INSERT INTO recipes (title, summary, image, spoonacular_id)
        VALUES ('$title', '$summary', '$image', '$spoonacular_id')";

if ($conn->query($sql)) {
    echo json_encode([
        "status" => "sukses",
        "data" => [
            "title" => $title,
            "summary" => $summary,
            "image" => $image,
            "spoonacular_id" => $spoonacular_id
        ]
    ]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal menyimpan data ke database"]);
}

$conn->close();
?>
