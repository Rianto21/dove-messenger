//npm module
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//local module
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="*" element="404" />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
