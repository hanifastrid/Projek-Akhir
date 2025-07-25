import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { detail, dataDetail, saveToBackend, updateBackend } = useFetch(); // tambahkan updateBackend

  const [rating, setRating] = useState(0);
  const buttons = [1, 2, 3, 4, 5];
  const score = (dataDetail.spoonacularScore ?? 0).toFixed(2);

  useEffect(() => {
    if (id) {
      detail(id);
    }
  }, [id, detail]);

  const handleSave = async () => {
    try {
      await saveToBackend();
      alert("Resep berhasil disimpan ke database!");
    } catch (e) {
      console.error("Gagal menyimpan:", e);
      alert("Gagal menyimpan ke database");
    }
  };

  const onClick = () => {
    navigate(-1);
  };

  const handleRating = async (value) => {
    setRating(value);
    try {
      await updateBackend({ spoonacular_id: dataDetail.id, rating: value });
      alert("Rating berhasil disimpan!");
    } catch (e) {
      console.error("Gagal menyimpan rating:", e);
      alert("Gagal menyimpan rating");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-xl border border-orange-300 px-4 py-12">
        <button onClick={onClick} className="my-2 bg-orange-300 p-2 rounded font-semibold text-white cursor-pointer">Back</button>
        <div className="my-4">
          <h1 className="text-4xl font-semibold mb-4">{dataDetail.title}</h1>
          <h2 className="text-xl mb-4"><span className="text-2xl text-orange-300 font-bold">{score}%</span> people like it!</h2>
          <img src={dataDetail.image} alt={dataDetail.title} />
        </div>

        {/* ✅ Tombol simpan ke backend */}
        <div className="my-4 text-center">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Simpan ke Database
          </button>
        </div>

        {dataDetail.extendedIngredients && (
          <div className="my-6">
            <h2 className="text-2xl font-medium">Ingredients</h2>
            {dataDetail.extendedIngredients.map((item, index) => (
              <div key={index} className="flex gap-2">
                <p>{item.name}</p>
                <p className="italic font-medium">
                  {item.amount} {item.unit}
                </p>
              </div>
            ))}
          </div>
        )}

        {dataDetail.analyzedInstructions?.[0]?.steps && (
          <div className="my-6">
            <h2 className="text-2xl font-medium">Instructions</h2>
            {dataDetail.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index} className="list-decimal">{step.step}</li>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center my-4 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-medium">Enjoying the recipe?</h3>
            <p>Please give us your rate</p>
            <div className="flex gap-2 justify-center my-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`rounded size-6 ${rating === button ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
                  onClick={() => handleRating(button)}
                >
                  {button}
                </button>
              ))}
            </div>
            <p>Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
