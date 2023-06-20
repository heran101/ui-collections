import React, { useState, useEffect } from "react";

const TryNumberFour = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const lastItem = prevItems[prevItems.length - 1];
        const newId = lastItem.id + 1;
        const newItem = { id: newId, text: `Slide ${newId}` };
        return [...prevItems.slice(1), newItem];
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {items.map((item) => (
        <div
          style={{ background: "red", width: "2rem", height: "3rem" }}
          key={item.id}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default TryNumberFour;
