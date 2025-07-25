import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="py-5">
      <motion.div
        className="bg-white p-5 rounded shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-primary fw-bold display-6 mb-4">📞 Hubungi Kami</h1>
        <p className="text-center fs-5 text-muted mb-4">
          Punya pertanyaan, saran, atau mau berbagi resep favoritmu? Kami siap mendengar!
        </p>

        <Card className="border-0 mb-4">
          <Card.Body className="fs-5">
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <strong>Email:</strong>{" "}
                <a href="mailto:recipesupport@foodhub.com" className="text-decoration-none text-dark">
                  recipesupport@foodhub.com
                </a>
              </li>
              <li className="mb-3">
                <FaInstagram className="me-2 text-pink" />
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/foodhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  @foodhub
                </a>
              </li>
              <li className="mb-3">
                <FaWhatsapp className="me-2 text-success" />
                <strong>WhatsApp:</strong> +62 812-3456-7890
              </li>
            </ul>
          </Card.Body>
        </Card>

        <p className="text-center fs-5">📬 Kami tunggu pesanmu ya!</p>
      </motion.div>
    </Container>
  );
};

export default Contact;
