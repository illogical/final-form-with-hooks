import React from "react";

interface ListDisplayProps {
  name: string;
  price: number;
}

export const ListDisplay = ({ name, price }: ListDisplayProps) => {
  return name ? (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  ) : (
    <div>Select an item</div>
  );
};
