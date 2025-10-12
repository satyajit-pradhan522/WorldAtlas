import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Country = React.lazy(() => import("./pages/Country"));
const Contact  = React.lazy(() => import("./pages/Contact"));

function App() {

  return (
    <>
      <Navbar/>
      <main className="max-w-6xl mx-auto p-4">
        <Suspense fallback={<p className="p-4">Loading page…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country" element={<Country />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default App
