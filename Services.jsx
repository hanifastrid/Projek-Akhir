import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const services = [
  {
    icon: "📚",
    title: "Recipe Collections",
    description: "Temukan berbagai resep — dari masakan tradisional Indonesia hingga hidangan internasional favorit.",
  },
  {
    icon: "🔍",
    title: "Search & Filter",
    description: "Cari resep berdasarkan kategori seperti vegetarian, Italia, atau bahan yang kamu punya.",
  },
  {
    icon: "❤️",
    title: "Favorite & Save",
    description: "Tandai resep favoritmu dan simpan untuk dicoba nanti.",
  },
  {
    icon: "🥦",
    title: "Ingredient-Based Suggestions",
    description: "Masukkan bahan yang ada di rumah, dan kami kasih ide masakan yang bisa kamu buat!",
  },
];

const Services = () => {
  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-primary display-6 fw-bold mb-5 text-center">✨ Layanan Kami</h1>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <h4 className="fw-bold mb-2">{service.icon} {service.title}</h4>
                    <p className="text-muted">{service.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Services;
