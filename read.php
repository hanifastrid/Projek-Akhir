<?php
require 'cors.php';
require 'db.php';

// Ambil data resep beserta jumlah likes
$sql = "SELECT id, title, summary, image, spoonacular_id, likes FROM recipes";
$result = $conn->query($sql);

$recipes = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['summary'] = html_entity_decode($row['summary']);
        $row['likes'] = (int) $row['likes']; // pastikan likes sebagai integer
        $recipes[] = $row;
    }
}

// Kirim hasil sebagai JSON
echo json_encode($recipes);

$conn->close();
?>
