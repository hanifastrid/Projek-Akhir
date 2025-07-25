<?php
// Ambil komentar dari database
$spoonacular_id = $_GET['spoonacular_id'] ?? null;
$comments = [];

if ($spoonacular_id) {
    $conn = new mysqli("localhost", "root", "", "recipes_db");

    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT name, comment, created_at FROM comments WHERE spoonacular_id = ? ORDER BY created_at DESC");
    $stmt->bind_param("s", $spoonacular_id);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Komentar Resep</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    .comment-box { border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; }
    .comment-author { font-weight: bold; }
    .comment-date { font-size: 0.9em; color: gray; }
    form { margin-top: 2rem; }
    input, textarea { width: 100%; padding: 0.5rem; margin: 0.5rem 0; border-radius: 4px; border: 1px solid #ccc; }
    button { padding: 0.5rem 1rem; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer; }
    button:hover { background: #0056b3; }
  </style>
</head>
<body>

  <h1>Komentar Resep</h1>

  <!-- Komentar yang sudah ada -->
  <?php if ($comments): ?>
    <?php foreach ($comments as $comment): ?>
      <div class="comment-box">
        <div class="comment-author"><?= htmlspecialchars($comment['name']) ?></div>
        <div class="comment-date"><?= htmlspecialchars($comment['created_at']) ?></div>
        <p><?= nl2br(htmlspecialchars($comment['comment'])) ?></p>
      </div>
    <?php endforeach; ?>
  <?php else: ?>
    <p>Belum ada komentar.</p>
  <?php endif; ?>

  <!-- Form komentar baru -->
  <h2>Tulis Komentar</h2>
  <form method="POST" action="comment.php">
    <input type="hidden" name="spoonacular_id" value="<?= htmlspecialchars($spoonacular_id) ?>" />
    <label for="name">Nama:</label>
    <input type="text" name="name" id="name" required />

    <label for="comment">Komentar:</label>
    <textarea name="comment" id="comment" rows="4" required></textarea>

    <button type="submit">Kirim</button>
  </form>

</body>
</html>
