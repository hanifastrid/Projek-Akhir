// import axios from "axios";

// const BACKEND_URL = "http://localhost/recipes-api";

// (async () => {
//   try {
//     // 1. Create
//     const createPayload = {
//       title: "Test Recipe",
//       summary: "This is a test recipe",
//       image: "https://example.com/image.jpg",
//       spoonacular_id: 123456789,
//     };
//     const createRes = await axios.post(`${BACKEND_URL}/create.php`, createPayload);
//     console.log("Create response:", createRes.data);

//     // 2. Read
//     const readRes = await axios.get(`${BACKEND_URL}/read.php`);
//     console.log("Read response:", readRes.data);

//     // 3. Update
//     const updatePayload = {
//       spoonacular_id: 123456789,
//       title: "Updated Test Recipe",
//       summary: "This is an updated test recipe",
//       image: "https://example.com/updated-image.jpg",
//     };
//     const updateRes = await axios.put(`${BACKEND_URL}/update.php`, updatePayload);
//     console.log("Update response:", updateRes.data);

//     // 4. Delete
//     const deleteRes = await axios.delete(`${BACKEND_URL}/delete.php`, { data: { spoonacular_id: 123456789 } });
//     console.log("Delete response:", deleteRes.data);

//   } catch (error) {
//     if (error.response) {
//       console.error("Error during CRUD test:", error.response.status, error.response.statusText, error.response.data);
//     } else {
//       console.error("Error during CRUD test:", error.message);
//     }
//   }
// })();
