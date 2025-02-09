import { Button } from "bik-button";
import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bikiran Buttons Demo</h1>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button
          variant="green-outline"
          title="Default Button"
          onClick={() => alert("Clicked!")}
          className="w-[300px]"
        />
        <Button title="Disabled Button" disabled={true} />
        <Button
          title="Custom Style"
          className="custom-button"
          onClick={() => alert("Custom button clicked!")}
        />
      </div>
    </div>
  );
}

export default App;
