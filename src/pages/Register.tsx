import React from "react";
import RegisterForm from "../components/registerForm";
import Navbar from "../components/Navbar";
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Registrasi</h1>
      <RegisterForm />
    </div>
  );
};

export default App;
