import React from "react";

export default function MeatPage() {
  const meats = [
    { name: "Beef", img: "https://images.unsplash.com/photo-1695683948382-868cd8d516fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlZnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Pork", img: "https://images.unsplash.com/photo-1623047437095-27418540c288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ya3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Chicken", img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8fDA%3D" },
    { name: "Goat Meat", img: "https://plus.unsplash.com/premium_photo-1726138640100-37e644d59628?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hdCUyMG1lYXR8ZW58MHx8MHx8fDA%3D" },
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
