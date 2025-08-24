// OrdersDashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders
  const fetchOrders = () => {
    axios
      .get("https://spacespark-backend.onrender.com/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://spacespark-backend.onrender.com/orders/${id}`);
      setOrders(orders.filter((o) => o._id !== id)); // update state
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order.");
    }
  };

  // Sell order (for now same as delete)
  const handleSell = async (id) => {
    try {
      await axios.delete(`https://spacespark-backend.onrender.com/orders/${id}`);
      setOrders(orders.filter((o) => o._id !== id));
      alert("Stock sold successfully!");
    } catch (error) {
      console.error("Error selling stock:", error);
      alert("Failed to sell stock.");
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (orders.length === 0) return <p>No orders found.</p>;

  const labels = orders.map((o) => o.name);

  const barData = {
    labels,
    datasets: [
      {
        label: "Quantity",
        data: orders.map((o) => o.qty),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: orders.map((o) => o.price),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders Dashboard</h2>

      {/* Orders Table */}
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ margin: "20px auto", width: "90%" }}
      >
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
              <td>
                <button
                  onClick={() => handleSell(order._id)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sell
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Charts */}
      <div style={{ width: "600px", margin: "20px auto" }}>
        <Bar
          data={barData}
          options={{ responsive: true, plugins: { legend: { position: "top" } } }}
        />
      </div>
      <div style={{ width: "600px", margin: "20px auto" }}>
        <Line
          data={lineData}
          options={{ responsive: true, plugins: { legend: { position: "top" } } }}
        />
      </div>
    </div>
  );
};

export default Orders;
