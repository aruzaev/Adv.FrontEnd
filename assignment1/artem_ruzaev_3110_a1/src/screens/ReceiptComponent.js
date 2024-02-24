import React, { useState } from "react";
import "./ReceiptComponent.css";

const ReceiptComponent = ({ usage }) => {
  const [name, setName] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [totalUsageCharge, setTotalUsageCharge] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [morningCharge, setMorningCharge] = useState(0);
  const [afternoonCharge, setAfternoonCharge] = useState(0);
  const [eveningCharge, setEveningCharge] = useState(0);
  const [shouldShowName, setShouldShowName] = useState(false);

  const calculateBill = () => {
    const morning = Number(usage.morning) * 0.132;
    const afternoon = Number(usage.afternoon) * 0.065;
    const evening = Number(usage.evening) * 0.094;
    const total = morning + afternoon + evening;
    const tax = total * 0.13;
    setMorningCharge(morning);
    setAfternoonCharge(afternoon);
    setEveningCharge(evening);
    setTotalUsageCharge(total);
    setSalesTax(tax);
    setTotalBill(total + tax);
    setShouldShowName(true);
  };

  return (
    <div className="receipt-component">
      <h2>Receipt</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={calculateBill}>Calculate</button>
      <div className="bill-details">
        {shouldShowName && (
          <p>Hello {name}, below are your estimated bill charges.</p>
        )}
        <p>Morning usage charge: ${morningCharge.toFixed(2)}</p>
        <p>Afternoon usage charge: ${afternoonCharge.toFixed(2)}</p>
        <p>Evening usage charge: ${eveningCharge.toFixed(2)}</p>
        <p>Total usage charge: ${totalUsageCharge.toFixed(2)}</p>
        <p>Sales Tax: ${salesTax.toFixed(2)}</p>
        <p>Total Bill Amount: ${totalBill.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ReceiptComponent;
