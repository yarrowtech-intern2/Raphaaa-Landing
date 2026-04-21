import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}
