import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import LocationDetail from "./pages/LocationDetail";
import Discover from "./pages/Discover";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Screensaver from "./pages/Screensaver";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/travel/:slug" element={<LocationDetail />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/screensaver" element={<Screensaver />} />
    </Routes>
  );
}

export default App;
