import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import RecipeList from "./Containers/RecipeList"
import RecipeDetail from "./Containers/RecipeDetail"
import Search from "./Pages/Search"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
// import RecipeApp from "./Hooks/ResipeApp"

function App() {
  return (
    <>
    <Router>
      <div className="fixed flex justify-center items-center w-screen h-screen -z-10 pointer-events-none">
        <h1 className="text-7xl text-orange-100">@u@</h1>
      </div>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="/home" element={<Home judul="Welcome to FoodHub!"/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="fixed flex justify-center w-screen bottom-6">
        <ul className="flex gap-4 bg-white shadow border border-black/[0.2] p-2 px-4 rounded-full">
          <Link to={"/"} className="hover:text-orange-300">Search</Link>
          <Link to={"/home"} className="hover:text-orange-300">Home</Link>
          <Link to={"/about"} className="hover:text-orange-300">About</Link>
          <Link to={"/services"} className="hover:text-orange-300">Services</Link>
          <Link to={"/contact"} className="hover:text-orange-300">Contact</Link>
        </ul>
      </div>
      {/* <RecipeApp /> */}
    </Router>
    </>
  )
}

export default App
