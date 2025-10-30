import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";
import PageNotFound from "@/pages/PageNotFound";
import HomePage from "@pages/HomePage";
import ProjectDetail from "@pages/ProjectDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
