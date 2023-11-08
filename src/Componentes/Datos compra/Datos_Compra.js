import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PurchaseTable() {
  const [purchaseData, setPurchaseData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/compraslist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de compra");
        }
        return response.json();
      })
      .then((data) => {
        setPurchaseData(data.compras);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de compra:", error);
      });
  }, []);

  return (
    <div>
      <h2>Tabla de Compras</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID de Compra</th>
            <th>Cantidad de Productos</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {purchaseData.map((purchase, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{purchase.totalProducts}</td>
              <td>${purchase.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { PurchaseTable };
