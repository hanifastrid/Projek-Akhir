import React, { useState } from "react";
import useFetch from "./useFetch";

const RecipeApp = () => {
    const [query, setQuery] = useState("");
    const { get, data, detail, dataDetail, saveToBackend } = useFetch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            await get(query);
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            setError("Gagal mengambil data resep.");
        }
        setLoading(false);
    };

    const handleSave = async () => {
        setLoading(true);
        setError(null);
        try {
            await saveToBackend();
            alert("Data berhasil disimpan ke backend!");
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            setError("Gagal menyimpan data ke backend.");
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>🍲 Cari Resep dari Spoonacular</h2>

            <input
                type="text"
                placeholder="Cari makanan (contoh: pasta, chicken...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: "10px", width: "300px", marginRight: "10px" }}
                disabled={loading}
            />
            <button onClick={handleSearch} style={{ padding: "10px" }} disabled={loading}>
                {loading ? "Loading..." : "Cari"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <hr />

            <h3>Hasil Pencarian:</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {data.map((recipe) => (
                    <div key={recipe.id} style={{ width: "200px", border: "1px solid #ddd", padding: "10px" }}>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt={recipe.title} style={{ width: "100%" }} />
                        <button onClick={() => detail(recipe.id)} style={{ marginTop: "10px" }} disabled={loading}>
                            Lihat Detail
                        </button>
                    </div>
                ))}
            </div>

            {dataDetail.id && (
                <>
                    <hr />
                    <h3>Detail Resep</h3>
                    <h4>{dataDetail.title}</h4>
                    <img src={dataDetail.image} alt={dataDetail.title} style={{ width: "300px" }} />
                    <p dangerouslySetInnerHTML={{ __html: dataDetail.summary }}></p>

                    <button
                        onClick={handleSave}
                        style={{ padding: "10px", backgroundColor: "#4CAF50", color: "#fff", border: "none" }}
                        disabled={loading}
                    >
                        {loading ? "Menyimpan..." : "Simpan ke Backend"}
                    </button>
                </>
            )}
        </div>
    );
};

export default RecipeApp;
