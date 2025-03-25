import React, { useState } from "react";

export default function ColorBox() {
  const colors = ["red", "blue", "green", "orange", "purple", "pink", "teal"];
  const [bgColor, setBgColor] = useState("white");

  const handleChangeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "0 auto 1rem",
          backgroundColor: bgColor,
          border: "2px solid #ccc",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
        }}
      ></div>
      <button onClick={handleChangeColor}>Đổi màu</button>
    </div>
  );
}
