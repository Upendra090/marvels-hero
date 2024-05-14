import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/heroes" element={<Hero />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
