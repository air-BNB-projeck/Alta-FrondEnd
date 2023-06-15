import Navbar from "../components/Navbar";
import Carddetail from "../components/Carddetail";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface StayData {
  id: number;
  StayImages: string;
  name: string;
  price: string;
  description: string;
}

const Detailvilla = () => {
  const { id } = useParams<{ id: string }>();
  const [stay, setStay] = useState<StayData | null>(null);

  useEffect(() => {
    const fetchStay = async () => {
      try {
        const response = await axios.get(
          `https://immersive-dashapi.my.id/stays/${id}`
        );
        setStay(response.data);
        console.log("Data Homestay:", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStay();
  }, [id]);

  const handleAddToCart = () => {
    // Implement logic to add item to cart
    console.log("Item added to cart:", stay);
  };

  return (
    <div className="w-screen h-screen top-0 overflow-x-hidden z-0">
      <Navbar />
      <h1 className="text-black text-center mt-4">Penginapan Anda</h1>
      <div className="flex flex-wrap justify-center mt-10 gap-20 mb-10 p-3">
        {stay ? (
          <Carddetail
            image={stay.StayImages}
            name={stay.name}
            price={stay.price}
            description={stay.description}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <p className="text-black">Tidak ada data homestay yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Detailvilla;
