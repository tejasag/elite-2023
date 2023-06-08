import { useState } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Pick color
        <input
          type="color"
          id="color"
          value={color}
          onInput={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
