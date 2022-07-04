//npm module
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//local module
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { AuthProvider } from "./utils/auth";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element="404" />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
