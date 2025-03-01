import React from "react";
import { AnimatedInputField, InputField } from "bik-inputs";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bikiran Buttons Demo</h1>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <h2>Hello world</h2>
        <AnimatedInputField
          label="OKKKKK"
          name="hello"
          formData={{}}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
