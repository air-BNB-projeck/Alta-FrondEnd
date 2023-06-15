import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/register1.jpg";

interface RegisterData {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  birth: string;
  gender: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    birth: "",
    gender: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://immersive-dashapi.my.id/users", formData);
      console.log(response.data);
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isRegistered && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-black">
            <h2 className="text-2xl font-semibold mb-4 text-black">Pendaftaran Berhasil!</h2>
            <p>Anda telah berhasil mendaftar. Anda akan diarahkan ke halaman login .</p>
          </div>
        </div>
      )}
      <div>
        <h2 className="text-black font-semibold text-center mt-10 text-4xl">Daftar Sekarang</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-10 bg-sky-400">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto my-8 bg-teal-100 shadow-lg rounded-lg px-8 py-6 w-2/4">
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
              Nama Lengkap:
            </label>
            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className="border border-teal-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Nomor Telepon:
            </label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="birth" className="block text-gray-700 text-sm font-bold mb-2">
              Tanggal Lahir:
            </label>
            <input type="date" id="birth" name="birth" value={formData.birth} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
              Jenis Kelamin:
            </label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500">
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
