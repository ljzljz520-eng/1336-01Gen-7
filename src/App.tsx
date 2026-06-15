import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "@/pages/Home";
import Myopia from "@/pages/specialty/Myopia";
import Cataract from "@/pages/specialty/Cataract";
import DryEye from "@/pages/specialty/DryEye";
import DoctorList from "@/pages/DoctorList";
import DoctorDetail from "@/pages/DoctorDetail";
import Appointment from "@/pages/Appointment";
import ArticleList from "@/pages/ArticleList";
import ArticleDetail from "@/pages/ArticleDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialty/myopia" element={<Myopia />} />
            <Route path="/specialty/cataract" element={<Cataract />} />
            <Route path="/specialty/dry-eye" element={<DryEye />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
