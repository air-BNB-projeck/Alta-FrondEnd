import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface StayData {
  id: number;
  images: string;
  name: string;
  price: string;

  rating: string;
}

const Home = () => {
  const [stays, setStays] = useState<StayData[]>([]);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await axios.get(
          "https://immersive-dashapi.my.id/stays"
        );
        setStays(response.data.data.stays);
        console.log("Data Home:", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStays();
  }, []);

  return (
    <div className="w-screen h-screen top-0 overflow-x-hidden z-0">
      <Navbar />
      <div className="flex flex-wrap justify-center mt-10 gap-20 mb-10 p-3">
        {stays.length > 0 ? (
          stays.map((stay) => (
            <Card
              key={stay.id}
              images={stay.images}
              name={stay.name}
              price={stay.price}
              rating={stay.rating}
            />
          ))
        ) : (
          <p>Tidak ada data homestay yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
