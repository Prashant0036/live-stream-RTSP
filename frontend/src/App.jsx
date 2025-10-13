import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import OverlayRenderer from "./components/OverlayRenderer";
import OverlayEditor from "./components/OverlayEditor";
import {
  createOverlay,
  getOverlays,
  deleteOverlay,
} from "./api/overlayAPI";

function App() {
  const [streamUrl, setStreamUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [overlays, setOverlays] = useState([]);

  // Fetch overlays from backend on load
  useEffect(() => {
    loadOverlays();
  }, []);

  const loadOverlays = async () => {
    try {
      const data = await getOverlays();
      setOverlays(data);
    } catch (err) {
      console.error("Failed to load overlays:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(streamUrl);
  };

  const handleAddOverlay = async (overlay) => {
    try {
      const saved = await createOverlay(overlay);
      setOverlays((prev) => [...prev, saved]);
    } catch (err) {
      console.error("Failed to save overlay:", err);
    }
  };

  const handleDeleteOverlay = async (id) => {
    try {
      await deleteOverlay(id);
      setOverlays((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error("Failed to delete overlay:", err);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🎥 Live Stream with Overlays (Full Stack)</h1>

      {/* Input RTSP/HLS Stream URL */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your HLS (.m3u8) URL"
          value={streamUrl}
          onChange={(e) => setStreamUrl(e.target.value)}
          style={{
            padding: "10px",
            width: "60%",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Play
        </button>
      </form>

      {/* Video Player */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {submittedUrl ? (
          <>
            <Player streamUrl={submittedUrl} />
            <OverlayRenderer overlays={overlays} />
          </>
        ) : (
          <p>Enter a stream URL above to start playing.</p>
        )}
      </div>

      {/* Add Overlay */}
      <OverlayEditor onAddOverlay={handleAddOverlay} />

      {/* Delete Overlay Buttons */}
      <div style={{ marginTop: "20px" }}>
        <h3>Saved Overlays</h3>
        {overlays.map((o) => (
          <div key={o._id} style={{ margin: "5px" }}>
            <span>
              {o.text} ({o.x},{o.y})
            </span>
            <button
              onClick={() => handleDeleteOverlay(o._id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
