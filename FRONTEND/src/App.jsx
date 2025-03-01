import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./assets/Login";
import Register from "./assets/Register";
import Recipe from "./assets/Recipe";
import CreateRecipe from "./assets/CreateRecipe";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes" element={isAuthenticated ? <Recipe /> : <Navigate to="/login" />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
