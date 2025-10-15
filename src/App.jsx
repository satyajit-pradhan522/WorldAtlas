import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'
import { Loader } from "./components/Loader";
import CountryDetails from "./components/CountryDetails";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Country = React.lazy(() => import("./pages/Country"));
const Contact  = React.lazy(() => import("./pages/Contact"));

function App() {

  return (
    <>
      <Navbar/>
      <main className="max-w-6xl mx-auto p-4">
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country" element={<Country />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default App
