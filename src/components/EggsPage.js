import React from "react";

export default function EggsPage() {
  const eggs = [
    { name: "Brown Eggs", img: "https://images.unsplash.com/photo-1585238342028-4f16a45cf32a?w=600" },
    { name: "White Eggs", img: "https://images.unsplash.com/photo-1606755962843-8e96ec68c7c4?w=600" },
    { name: "Free-Range Eggs", img: "https://images.unsplash.com/photo-1601050690955-934b6f2d2d5b?w=600" },
    { name: "Organic Eggs", img: "https://images.unsplash.com/photo-1585238342078-0a3c923c5f37?w=600" },
  ];

  return (
    <div className="eggs-page">
      <h1>Organic Eggs</h1>
      <p>Farm-fresh eggs, packed with nutrients and taste.</p>

      <div className="eggs-grid">
        {eggs.map((item, index) => (
          <div key={index} className="eggs-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
