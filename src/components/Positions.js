import React from "react";
import { positions } from "../data/data";

// Chart.js imports
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Positions = () => {
  const labels = positions.map((stock) => stock.name);
  const pnlData = positions.map(
    (stock) => stock.price * stock.qty - stock.avg * stock.qty
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "P&L (₹)",
        data: pnlData,
        backgroundColor: pnlData.map((value) =>
          value >= 0 ? "rgba(0, 200, 83, 0.7)" : "rgba(255, 82, 82, 0.7)"
        ),
        borderColor: pnlData.map((value) =>
          value >= 0 ? "rgb(0, 200, 83)" : "rgb(255, 82, 82)"
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Stock Positions - Profit & Loss" },
    },
  };

  return (
    <div style={{ padding: "10px" }}>
      <h3 className="title">Positions ({positions.length})</h3>

      {/* Responsive Table */}
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table style={{ width: "100%", minWidth: "600px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Responsive Chart */}
      <div style={{ width: "100%", maxWidth: "600px", height: "300px", margin: "30px auto" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Positions;
