import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../Hooks/useFetch";

const Home = ({ judul }) => {
  const {
    fetchAll,
    data,
    deleteBackend,
    updateBackend,
    likeRecipe,
    addComment,
    getComments,
    loading,
    error,
  } = useFetch();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: "",
    spoonacular_id: "",
  });

  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  const fetchCommentsForRecipe = async (id) => {
    const recipeComments = await getComments(id);
    setComments((prev) => ({
      ...prev,
      [id]: Array.isArray(recipeComments) ? recipeComments : [],
    }));
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      data.forEach((item) => fetchCommentsForRecipe(item.spoonacular_id));
    }
  }, [data]);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus resep ini?")) {
      deleteBackend(id).then(() => {
        fetchAll();
      });
    }
  };

  const handleEdit = (item) => {
    setFormData({ ...item });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateBackend(formData);
    setShowModal(false);
    fetchAll();
  };

  const handleLike = async (id) => {
    await likeRecipe(id);
    fetchAll();
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleCommentSubmit = async (id) => {
    const commentText = commentInputs[id];
    if (!commentText) return;

    await addComment(id, commentText);
    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
    fetchCommentsForRecipe(id);
  };

  return (
    <Container className="py-5">
      <motion.div
        className="bg-light rounded shadow p-5 mb-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="display-4 fw-bold text-primary mb-4 text-center">{judul}</h1>
        <p className="text-muted fs-5 mb-3">
          🌟 Explore a world of delicious and easy-to-make recipes right at your fingertips.
        </p>
        <p className="text-muted fs-5 mb-3">
          🍴 Browse curated dishes, search by ingredients, and save your favorites to cook later.
        </p>
        <p className="text-muted fs-5 mb-4">
          🚀 Start your cooking journey with us — and make every meal memorable.
        </p>
        <div className="text-center">
          <Link to="/Search" className="btn btn-primary btn-lg">
            Cari Resep Sekarang
          </Link>
        </div>
      </motion.div>

      <h3 className="mb-4 text-center text-secondary">📚 Resep Tersimpan</h3>

      {loading && (
        <div className="text-center mb-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      <Row>
        {data.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text
                  dangerouslySetInnerHTML={{
                    __html: item.summary.slice(0, 100) + "...",
                  }}
                />
                <div className="d-flex justify-content-between mb-2">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(item.spoonacular_id)}
                  >
                    Hapus
                  </Button>
                </div>

                <div className="text-center mb-2 text-success fw-bold">
                  ❤️ {item.likes ?? 0} suka
                </div>

                <div className="text-center mb-3">
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => handleLike(item.spoonacular_id)}
                  >
                    👍 Suka
                  </Button>
                </div>

                <hr />
                <div>
                  <h6>Komentar:</h6>
                  <ul className="list-unstyled">
                    {(comments[item.spoonacular_id] || []).map((comment, index) => (
                      <li key={index}>
                        <strong>{comment.name}</strong>: {comment.comment}
                      </li>
                    ))}
                  </ul>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCommentSubmit(item.spoonacular_id);
                    }}
                  >
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="text"
                        size="sm"
                        placeholder="Tulis komentar..."
                        value={commentInputs[item.spoonacular_id] || ""}
                        onChange={(e) =>
                          handleCommentChange(item.spoonacular_id, e.target.value)
                        }
                      />
                    </Form.Group>
                    <Button type="submit" variant="primary" size="sm">
                      Kirim
                    </Button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Form onSubmit={handleUpdate}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Resep</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Gambar</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button variant="primary" type="submit">
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Home;
