import React, { useState } from "react";
import axios from "axios";

const SellActionWindow = ({ orderId, close }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSell = async () => {
    try {
      const res = await axios.delete(`https://spacespark-backend.onrender.com/orders/${orderId}`);

      if (res.status === 200) {
        alert("Stock sold successfully!");
        close();
        window.location.reload();
      } else {
        alert("Failed to sell stock.");
      }
    } catch (err) {
      console.error("Error selling stock:", err);
      alert("Failed to sell stock.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
        <h3>Sell Stock</h3>
        <p>Order ID: {orderId}</p>

        <div>
          <label>Quantity: </label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        <div>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSell}>Confirm Sell</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
