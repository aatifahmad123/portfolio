import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Curiosities from "./pages/Curiosities";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/curiosities" element={<PageTransition><Curiosities /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
