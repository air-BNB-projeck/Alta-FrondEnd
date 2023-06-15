import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterForm from "./components/registerForm";
import Detailvilla from "./pages/Detailvilla";
const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/Detailvilla" element={<Detailvilla />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
