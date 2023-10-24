import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import username from "./assets/username-icon.svg"
import password from "./assets/password-icon.svg"
import icono from "./assets/usuario.svg"

export const Login = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleIngresarClick = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.usuario.trim()) {
      newErrors.usuario = "El campo de usuario es obligatorio";
    }

    if (!formData.contraseña.trim()) {
      newErrors.contraseña = "El campo de contraseña es obligatorio";
    } else if (formData.contraseña.length < 8) {
      newErrors.contraseña = "La contraseña debe tener al menos 8 caracteres";
    }
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);

      fetch("http://localhost:5000/inicio", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {

          alert("Formulario enviado correctamente");
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
        });
    } else {
      setErrores(newErrors);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-light p-5 rounded-5 text-dark shadow">
        <div className="d-flex justify-content-center">
          <img src={icono} alt="login-icon" style={{ height: "5rem" }} />
        </div>
        <div className="text-center fs-2 fw-bold">Acceso</div>
        <div className={`input-group mt-4 ${errores.usuario ? "has-error" : ""}`}>
          <div className="input-group-text bg-dark">
            <img src={username} alt="username-icon" style={{ height: "1rem" }} />
          </div>
          <input
            className={`form-control bg-light ${errores.usuario ? "border border-danger" : ""
              }`}
            type="text"
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
          />
        </div>

        {errores.usuario && (
          <div className="text-danger">{errores.usuario}</div>
        )}


        <div className={`input-group mt-1 ${errores.contraseña ? "has-error" : ""}`}>
          <div className="input-group-text bg-dark">
            <img src={password} alt="password-icon" style={{ height: "1rem" }} />
          </div>
          <input
            className={`form-control bg-light ${errores.contraseña ? "border border-danger" : ""
              }`}
            type="password"
            placeholder="Contraseña"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
        </div>
        {errores.contraseña && (
          <div className="text-danger">{errores.contraseña}</div>
        )}

        <div className="d-flex justify-content-around mt-1">
          <div className="d-flex align-items-center gap-1">
            <input className="form-check-input" type="checkbox" />
            <div className="pt-1">Recuérdame</div>
          </div>
          <div className="pt-1">
            <a
              href="#"
              className="text-decoration-none text-info fw-semibold fst-italic"

            >¿Olvidaste tu contraseña?</a>
          </div>
        </div>

        
        <button
          className="btn btn-dark text-white w-100 mt-4 fw-semibold shadow-sm"
          onClick={handleIngresarClick}
        >
          Ingresar
        </button>

        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>¿Aún no tienes una cuenta?</div>
          <a href="http://localhost:3000/registro" className="text-decoration-none text-info fw-semibold">
            Registrarse
          </a>
        </div>


        <div className="d-flex gap-1 justify-content-center mt-2">
          <div>Volver a la página de inicio</div>
          <a href="http://localhost:3000/" className="text-decoration-none text-info fw-semibold">Inicio</a>
        </div>
      </div>
    </div >
  );
}

