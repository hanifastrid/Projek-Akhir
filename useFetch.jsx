import { useState } from "react";
import axios from "axios";

const SPOONACULAR_API = "https://api.spoonacular.com/recipes";
const API_KEY = import.meta.env.VITE_API_KEY;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const useFetch = () => {
  const [data, setData] = useState([]);
  const [dataDetail, setDataDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔍 Cari resep dari Spoonacular
  const get = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${SPOONACULAR_API}/complexSearch`, {
        params: { query, apiKey: API_KEY, number: 10 },
      });
      setData(res.data.results);
    } catch (err) {
      setError("Gagal mengambil data resep dari Spoonacular");
      console.error(err);
    }
    setLoading(false);
  };

  // 📄 Ambil detail resep dari Spoonacular
  const detail = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${SPOONACULAR_API}/${id}/information`, {
        params: { apiKey: API_KEY },
      });
      setDataDetail(res.data);
    } catch (err) {
      setError("Gagal mengambil detail resep");
      console.error(err);
    }
    setLoading(false);
  };

  // 💾 Simpan resep ke backend
  const saveToBackend = async () => {
    if (!dataDetail.id) {
      alert("Detail resep belum dipilih");
      return;
    }

    setLoading(true);
    setError(null);
    const payload = {
      title: dataDetail.title,
      summary: dataDetail.summary,
      image: dataDetail.image,
      spoonacular_id: dataDetail.id,
    };

    try {
      const res = await axios.post(`${BACKEND_URL}/create.php`, payload);
      alert("Resep berhasil disimpan ke backend!");
      console.log(res.data);
    } catch (err) {
      const message = err.response?.data?.error || "Gagal menyimpan data ke backend";
      setError(message);
      console.error("Detail error:", err.response?.data || err);
      alert(message);
    }

    setLoading(false);
  };

  // 📥 Ambil semua resep dari backend
  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BACKEND_URL}/read.php`);
      setData(res.data);
    } catch (err) {
      setError("Gagal mengambil data dari backend");
      console.error(err);
    }
    setLoading(false);
  };

  // ✏️ Update resep di backend
  const updateBackend = async (updateData) => {
    if (!updateData.spoonacular_id) {
      alert("ID resep tidak ditemukan untuk update");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(`${BACKEND_URL}/update.php`, updateData);
      alert("Resep berhasil diupdate di backend!");
      console.log(res.data);
    } catch (err) {
      setError("Gagal mengupdate resep di backend");
      console.error(err);
      alert("Gagal update ke backend");
    }
    setLoading(false);
  };

  // ❌ Hapus resep dari backend
  const deleteBackend = async (id) => {
    if (!id) {
      alert("ID resep tidak ditemukan untuk dihapus");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await axios.delete(`${BACKEND_URL}/delete.php`, {
        data: { spoonacular_id: id },
      });
      alert("Resep berhasil dihapus dari backend!");
      console.log(res.data);
    } catch (err) {
      setError("Gagal menghapus resep di backend");
      console.error(err);
      alert("Gagal hapus dari backend");
    }
    setLoading(false);
  };

  // 👍 Simpan feedback like ke backend
  const likeRecipe = async (spoonacular_id) => {
    if (!spoonacular_id) {
      alert("ID resep tidak ditemukan untuk like");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${BACKEND_URL}/like.php`, {
        spoonacular_id,
      });
      console.log(res.data);
    } catch (err) {
      const message = err.response?.data?.error || "Gagal memberikan like ke backend";
      setError(message);
      console.error("Detail error:", err.response?.data || err);
    }
    setLoading(false);
  };

  // 💬 Kirim komentar ke backend
  const addComment = async (spoonacular_id, comment) => {
    if (!spoonacular_id || !comment.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${BACKEND_URL}/comment.php`, {
        spoonacular_id,
        name: "Anonymous", // ← Tambahkan name agar tidak error 400
        comment,
      });
      console.log("Komentar terkirim:", res.data);
    } catch (err) {
      const message = err.response?.data?.error || "Gagal mengirim komentar";
      setError(message);
      console.error("Error komentar:", err.response?.data || err);
    }
    setLoading(false);
  };

  // 📄 Ambil komentar dari backend
  const getComments = async (spoonacular_id) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/get_comments.php`, {
        params: { spoonacular_id },
      });
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  return {
    get,
    detail,
    saveToBackend,
    fetchAll,
    updateBackend,
    deleteBackend,
    likeRecipe,
    addComment,
    getComments,
    data,
    dataDetail,
    loading,
    error,
  };
};

export default useFetch;
