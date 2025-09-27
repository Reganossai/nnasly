import React from "react";

export default function MeatPage() {
  const meats = [
    { name: "Beef", img: "https://images.unsplash.com/photo-1606755962773-1f0f54c2c7ad?w=600" },
    { name: "Pork", img: "https://images.unsplash.com/photo-1605479091312-5e3dbe2e6f32?w=600" },
    { name: "Chicken", img: "https://images.unsplash.com/photo-1601050690597-7d0d8d1c1a3b?w=600" },
    { name: "Goat Meat", img: "https://images.unsplash.com/photo-1588167096572-3f0bcb3c1c27?w=600" },
  ];

  return (
    <div className="meat-page">
      <h1>Fresh Meat</h1>
      <p>Premium cuts from our farm, fresh and naturally raised.</p>

      <div className="meat-grid">
        {meats.map((item, index) => (
          <div key={index} className="meat-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
