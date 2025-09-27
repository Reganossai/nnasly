import React from "react";

export default function EggsPage() {
  const eggs = [
    { name: "Brown Eggs", img: "https://images.unsplash.com/photo-1641999161954-f6a92e137b84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyb3duJTIwZWdnc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "White Eggs", img: "https://images.unsplash.com/photo-1711629483565-4f35f76ac1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBlZ2dzfGVufDB8fDB8fHww" },
    { name: "Free-Range Eggs", img: "https://images.unsplash.com/photo-1585355611468-3c418173f128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjByYW5nZSUyMGVnZ3N8ZW58MHx8MHx8fDA%3D" },
    { name: "Organic Eggs", img: "https://images.unsplash.com/photo-1740476371489-835643ee9791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaWMlMjBlZ2dzfGVufDB8fDB8fHww" },
  ];

  return (
    <div className="eggs-page">
      <h1>Eggs</h1>
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
