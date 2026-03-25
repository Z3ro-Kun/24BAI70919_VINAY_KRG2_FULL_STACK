import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/jobs">Job 1</Link>
            <Link to="/apply">Apply</Link>
          </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;