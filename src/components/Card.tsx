import React, { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
