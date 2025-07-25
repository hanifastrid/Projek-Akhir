import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container className="py-5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-4 rounded shadow"
      >
        <h1 className="text-primary display-6 fw-bold mb-4 text-center">👨‍🍳 Tentang Kami</h1>

        <p className="fs-5 text-muted mb-3">
          Website ini dibuat khusus untuk kamu yang cinta masakan rumahan, doyan kuliner lokal, atau suka eksplor rasa dari berbagai belahan dunia 🌍.
        </p>

        <p className="fs-5 text-muted mb-3">
          Kami percaya bahwa memasak itu bukan cuma soal rasa — tapi juga soal kebersamaan, kreativitas, dan cinta 💖.
        </p>

        <p className="fs-5 text-muted">
          Dibuat oleh sekelompok mahasiswa yang punya semangat berbagi inspirasi makanan untuk semua kalangan — dari yang baru belajar masak,
          sampai yang udah jago bikin rendang sendiri! 🔥
        </p>
      </motion.div>
    </Container>
  );
};

export default About;
