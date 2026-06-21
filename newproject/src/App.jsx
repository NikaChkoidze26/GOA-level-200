import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {

  const [dark, setDark] = useState(false);

  return (
    <div
      className={`
        ${dark ? "dark" : ""}
        min-h-screen
        bg-white
        dark:bg-gray-950
        text-black
        dark:text-white
        transition-all
        duration-300
      `}
    >

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;