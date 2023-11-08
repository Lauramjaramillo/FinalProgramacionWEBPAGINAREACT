import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Inventario() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/productoslist/")
      .then((response) => {
        if (!response.ok) {
          toast.error("No se logró la conexión");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.productos && data.productos.length > 0) {
          setProductos(data.productos[0].products);
        } else {
          toast.error("No se encontraron datos de productos.");
        }
      })
      .catch((error) => {
        toast.error("Error obteniendo la data: " + error.message);
      });
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      {productos.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Título</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.title}</td>
                <td>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron datos de productos.</p>
      )}
    </div>
  );

}

export { Inventario };
