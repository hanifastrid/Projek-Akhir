<?php
// Set CORS headers first
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: false");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Set content type and send response
header("Content-Type: application/json");
echo json_encode(["message" => "API aktif"]);

// LANJUT KODE KAMU
require 'db.php';


$method = $_SERVER['REQUEST_METHOD'];
$uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $result = $conn->query("SELECT * FROM recipes WHERE id = $id");
            echo json_encode($result->fetch_assoc());
        } else {
            $result = $conn->query("SELECT * FROM recipes");
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            echo json_encode($data);
        }
        break;

    case 'POST':
        $title = $conn->real_escape_string($input['title']);
        $summary = $conn->real_escape_string($input['summary']);
        $image = $conn->real_escape_string($input['image']);
        $spoonacular_id = intval($input['spoonacular_id']);

        $conn->query("INSERT INTO recipes (title, summary, image, spoonacular_id) 
                      VALUES ('$title', '$summary', '$image', $spoonacular_id)");

        echo json_encode(['message' => 'Data berhasil ditambahkan']);
        break;

    case 'PUT':
        $id = intval($_GET['id']);
        $title = $conn->real_escape_string($input['title']);
        $summary = $conn->real_escape_string($input['summary']);
        $image = $conn->real_escape_string($input['image']);

        $conn->query("UPDATE recipes SET title='$title', summary='$summary', image='$image' WHERE id=$id");
        echo json_encode(['message' => 'Data berhasil diupdate']);
        break;

    case 'DELETE':
        $id = intval($_GET['id']);
        $conn->query("DELETE FROM recipes WHERE id=$id");
        echo json_encode(['message' => 'Data berhasil dihapus']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['message' => 'Metode tidak didukung']);
        break;
}
?>
