import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import PersistentScene from "./components/PersistentScene";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function HomePage() {
  return (
    <div>
      <PersistentScene />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Teaching />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="app">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NotFound />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;
