import React, { useState } from "react";

const OverlayEditor = ({ onAddOverlay }) => {
  const [text, setText] = useState("");
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [color, setColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(20);

  const handleAdd = () => {
    if (!text) return alert("Please enter overlay text");
    onAddOverlay({ text, x, y, color, fontSize });
    setText("");
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "fit-content",
        marginInline: "auto",
      }}
    >
      <h3>Add Overlay</h3>
      <input
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ margin: "5px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="X"
        value={x}
        onChange={(e) => setX(Number(e.target.value))}
        style={{ margin: "5px", padding: "5px", width: "60px" }}
      />
      <input
        type="number"
        placeholder="Y"
        value={y}
        onChange={(e) => setY(Number(e.target.value))}
        style={{ margin: "5px", padding: "5px", width: "60px" }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="number"
        placeholder="Font Size"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        style={{ margin: "5px", padding: "5px", width: "80px" }}
      />
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default OverlayEditor;
