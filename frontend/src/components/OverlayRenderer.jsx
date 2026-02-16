import React from "react";

const OverlayRenderer = ({ overlays }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 1,
        left: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // So overlays don't block video controls
      }}
    >
      {overlays.map((overlay, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: overlay.y,
            left: overlay.x,
            color: overlay.color || "white",
            fontSize: overlay.fontSize || "20px",
            pointerEvents: "none",
          }}
        >
          {overlay.text}
        </div>
      ))}
    </div>
  );
};

export default OverlayRenderer;
