import React from "react";
import { FC } from "react";
interface cardProps {
  image: string;
  name: string;
  price?: string | number;
  rating?: string | number;
  description?: String;
}
const Carddetail: FC<cardProps> = ({ image, name, price, rating, description }) => {
  return (
    <div>
      <div className="card w-100 bg-sky-100 shadow-xl text-black">
        <figure>
          <img src={image} alt="gambar villa" />
        </figure>
        <div className="absolute top-0 right-0 mr-5 mt-3"></div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="absolute bottom-65 right-3 justify-end">
            <div className="badge badge-primary">⭐{rating} / 5</div>
          </div>
          <p className="font-medium">
            <span className="text-2xl text-blue-700">{price}</span> / malam
          </p>
          <p className="font-medium">
            <span className="text-xl text-blue-700">{description}</span> / malam
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carddetail;
