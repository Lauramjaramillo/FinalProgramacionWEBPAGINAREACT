import "bootstrap/dist/css/bootstrap.min.css";
import { NavHomeU } from "../Navbar/Navbar";
import { Inventario } from "../Inventario/Inventario";
import { PurchaseTable } from "../Datos compra/Datos_Compra";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavAdmVer(props) {
  const handleInventarioClick = () => {
    props.onInventarioClick(); // Llama a la función proporcionada por el padre
  };

  const toggleHistorialCompras = () => {
    props.onHistorialComprasClick(); // Llama a la función proporcionada por el padre
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#"
                  onClick={handleInventarioClick}
                  className="nav-link"
                >
                  Inventario
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  onClick={toggleHistorialCompras}
                  className="nav-link"
                >
                  Historial de compras
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showInventario, setShowInventario] = useState(false);
  const [showHistorialCompras, setShowHistorialCompras] = useState(false);
  const navigate = useNavigate();

  async function checkAdminAccess() {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      try {
        const response = await fetch("http://localhost:3000/administrador", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();

        if (data.isAdmin === true) {
          toast.success("Bienvenido administrador");
          setIsAdmin(true);
        } else {
          navigate("/ingresar");
        }
      } catch (error) {
        toast.error("Error");
      }
    } else {
      navigate("/ingresar");
    }
  }

  const toggleInventario = () => {
    setShowInventario(!showInventario);
    setShowHistorialCompras(false);
  };

  const toggleHistorialCompras = () => {
    setShowHistorialCompras(!showHistorialCompras);
    setShowInventario(false);
    
  };

  useEffect(() => {
    checkAdminAccess();
  }, []);

  return (
    <div>
      <NavHomeU
        title1="Inicio"
        url1="http://localhost:3000/"
        title2="Ingresar"
        url2="http://localhost:3000/ingresar"
        title3="Página compras"
        url3="http://localhost:3000/comprar"
      />
      {isAdmin && (
        <div>
          <NavAdmVer
            onInventarioClick={toggleInventario}
            onHistorialComprasClick={toggleHistorialCompras}
          />
          {showInventario && <Inventario />}
          {showHistorialCompras && <PurchaseTable />}{" "}
          {/* Muestra PurchaseTable si showHistorialCompras es true */}
        </div>
      )}
    </div>
  );
}

export { Admin };
