import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import RecipeList from "../Containers/RecipeList";

const Search = () => {
  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-4 rounded shadow"
      >
        <h1 className="text-primary fw-bold display-6 mb-3 text-center">🔍 Cari Resep</h1>
        <p className="text-muted text-center mb-4 fs-5">
          Temukan resep favoritmu berdasarkan bahan 🥕 atau nama masakan 🍲.
        </p>

        <RecipeList />
      </motion.div>
    </Container>
  );
};

export default Search;
