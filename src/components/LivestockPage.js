import React from "react";

export default function LivestockPage() {
  const livestock = [
    { name: "Pigs", img: "https://images.unsplash.com/photo-1588167056544-64b91e9a2b48?w=600" },
    { name: "Goats", img: "https://images.unsplash.com/photo-1559070117-6fbd4b8e0a89?w=600" },
    { name: "Chickens", img: "https://images.unsplash.com/photo-1605478585134-89a00c553548?w=600" },
    { name: "Cows", img: "https://images.unsplash.com/photo-1598966733710-5c1a89fddbe6?w=600" },
  ];

  return (
    <div className="livestock-page">
      <h1>Our Livestock</h1>
      <p>Explore our wide variety of healthy, farm-raised animals.</p>

      <div className="livestock-grid">
        {livestock.map((item, index) => (
          <div key={index} className="livestock-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
