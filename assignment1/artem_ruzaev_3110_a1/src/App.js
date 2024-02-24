import React, { useState } from "react";
import ReceiptComponent from "./screens/ReceiptComponent";
import FormComponent from "./screens/FormComponent";

function App() {
  const [usage, setUsage] = useState();

  return (
    <div>
      <div className="component">
        <FormComponent setUsage={setUsage} />
      </div>
      <div className="component">
        <ReceiptComponent usage={usage} />
      </div>
    </div>
  );
}

export default App;
