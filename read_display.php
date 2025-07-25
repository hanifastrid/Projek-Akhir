<?php
require_once "db.php";

// Ambil data resep beserta jumlah likes
$sql = "SELECT id, title, summary, image, spoonacular_id, likes FROM recipes";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Daftar Resep dari Database</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 2rem;
    }
    h1 {
      color: #333;
    }
    .recipe-card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }
    .recipe-card img {
      width: 150px;
      height: auto;
      border-radius: 8px;
    }
    .recipe-info {
      flex: 1;
    }
    .likes {
      color: #e67e22;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>Daftar Resep Tersimpan</h1>

  <?php if ($result && $result->num_rows > 0): ?>
    <?php while($row = $result->fetch_assoc()): ?>
      <div class="recipe-card">
        <img src="<?= htmlspecialchars($row['image']) ?>" alt="<?= htmlspecialchars($row['title']) ?>">
        <div class="recipe-info">
          <h2><?= htmlspecialchars($row['title']) ?></h2>
          <p><?= html_entity_decode($row['summary']) ?></p>
          <p class="likes">❤️ <?= (int)$row['likes'] ?> likes</p>
          <p><small>ID: <?= (int)$row['spoonacular_id'] ?></small></p>
        </div>
      </div>
    <?php endwhile; ?>
  <?php else: ?>
    <p>Tidak ada data resep yang ditemukan.</p>
  <?php endif; ?>

</body>
</html>

<?php
$conn->close();
?>
