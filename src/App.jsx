import "./App.css";
import PrincipalPage from "./Views/PrincipalPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelDetails from "./Views/TravelDetails";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="layout">
        <header className="layout__header">
          <NavBar />
        </header>

        <main className="layout__main">
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
            <Route path="/travelDetails" element={<TravelDetails />} />
          </Routes>
        </main>

        <footer className="layout__footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
