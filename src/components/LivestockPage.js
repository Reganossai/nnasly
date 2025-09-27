import React from "react";

export default function LivestockPage() {
  const livestock = [
    { name: "Pigs", img: "https://images.unsplash.com/photo-1545468258-576dbac5faa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlnc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Goats", img: "https://images.unsplash.com/photo-1593750439808-958d28558592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hdHN8ZW58MHx8MHx8fDA%3D" },
    { name: "Chickens", img: "https://images.unsplash.com/photo-1441122456239-401e92b73c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbnN8ZW58MHx8MHx8fDA%3D" },
    { name: "Cows", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293c3xlbnwwfHwwfHx8MA%3D%3D" },
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
