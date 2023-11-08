import React, { useState } from "react";
import Registro from "./assets/Registro.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";




export const Form1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    inputname1: "",
    inputname2: "",
    inputlast1: "",
    inputlast2: "",
    inputemail: "",
    inputAddress1: "",
    inputpassword: "",
    inputpassword2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    // Utiliza trim() para eliminar espacios en blanco innecesarios
    setFormData({
      ...formData,
      [id]: type === "file" ? e.target.files[0] : value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validación de campo obligatorio para el primer nombre
    if (!formData.inputname1) {
      newErrors.inputname1 = "El primer nombre es obligatorio";
    }

    // Validación de campo obligatorio para el primer apellido
    if (!formData.inputlast1) {
      newErrors.inputlast1 = "El primer apellido es obligatorio";
    }

    // Validación de correo electrónico
    if (!formData.inputemail) {
      newErrors.inputemail = "El correo electrónico es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.inputemail)) {
      newErrors.inputemail = "El correo electrónico no es válido";
    }

    // Validación de contraseña
    if (!formData.inputpassword) {
      newErrors.inputpassword = "La contraseña es obligatoria";
    } else if (formData.inputpassword.length < 8) {
      newErrors.inputpassword =
        "La contraseña debe tener al menos 8 caracteres";
    }

    // Validación de confirmación de contraseña
    if (!formData.inputpassword2) {
      newErrors.inputpassword2 = "La confirmación de contraseña es obligatoria";
    } else if (formData.inputpassword2.length < 8) {
      newErrors.inputpassword2 =
        "La contraseña debe tener al menos 8 caracteres";
    } else if (formData.inputpassword !== formData.inputpassword2) {
      newErrors.inputpassword2 = "Las contraseñas no coinciden";
    }

    // Validación de campo obligatorio para la dirección
    if (!formData.inputAddress1) {
      newErrors.inputAddress1 = "La dirección es obligatoria";
    }

    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:3000/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("El usuario fue registrado correctamente");
            navigate("/ingresar");
            return response.json();
          } else {
            if (response.status === 400) {
              toast.error("Usuario ya existe");
            } else {
              toast.error("Error!");
            }
          }
        })
        .catch((error) => {
          toast.error("Error en la solicitud");
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-light p-5 rounded-5 text-dark shadow"
        style={{ width: "60%" }}
      >
        <div className="d-flex justify-content-center">
          <img src={Registro} alt="login-icon" style={{ height: "4rem" }} />
        </div>
        <div className="text-center fs-2 fw-bold">Registro</div>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center mt-3 p-1">
            <div className="form-group col">
              <label htmlFor="inputname1">Primer nombre</label>
              <input
                type="text"
                className={`form-control ${
                  errors.inputname1 ? "border-danger" : ""
                }`}
                id="inputname1"
                placeholder="Primer nombre"
                value={formData.inputname1}
                onChange={handleChange}
              />
              {errors.inputname1 && (
                <div className="text-danger">{errors.inputname1}</div>
              )}
            </div>
            <div className="form-group col">
              <label htmlFor="inputname2">Segundo nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputname2"
                placeholder="Segundo nombre"
                value={formData.inputname2}
                onChange={handleChange}
              />
              {errors.inputname2 && (
                <div className="text-danger">{errors.inputname2}</div>
              )}
            </div>
          </div>
          <div className="row align-items-center p-1">
            <div className="form-group col">
              <label htmlFor="inputlast1">Primer apellido</label>
              <input
                type="text"
                className={`form-control ${
                  errors.inputlast1 ? "border-danger" : ""
                }`}
                id="inputlast1"
                placeholder="Primer apellido"
                value={formData.inputlast1}
                onChange={handleChange}
              />
              {errors.inputlast1 && (
                <div className="text-danger">{errors.inputlast1}</div>
              )}
            </div>
            <div className="form-group col">
              <label htmlFor="inputlast2">Segundo apellido</label>
              <input
                type="text"
                className="form-control"
                id="inputlast2"
                placeholder="Segundo apellido"
                value={formData.inputlast2}
                onChange={handleChange}
              />
              {errors.inputlast2 && (
                <div className="text-danger">{errors.inputlast2}</div>
              )}
            </div>
          </div>
          <div className="row align-items-center p-1">
            <div className="form-group col">
              <label htmlFor="inputemail">Correo electrónico</label>
              <input
                type="email"
                className={`form-control ${
                  errors.inputemail ? "border-danger" : ""
                }`}
                id="inputemail"
                placeholder="abc@email.com"
                value={formData.inputemail}
                onChange={handleChange}
              />
              {errors.inputemail && (
                <div className="text-danger">{errors.inputemail}</div>
              )}
            </div>
            <div className="form-group col">
              <label htmlFor="inputAddress1">Dirección</label>
              <input
                type="text"
                className={`form-control ${
                  errors.inputAddress1 ? "border-danger" : ""
                }`}
                id="inputAddress1"
                placeholder="Dirección residencia"
                value={formData.inputAddress1}
                onChange={handleChange}
              />
              {errors.inputAddress1 && (
                <div className="text-danger">{errors.inputAddress1}</div>
              )}
            </div>
          </div>
          <div className="row align-items-center p-1">
            <div className="form-group col">
              <label htmlFor="inputpassword">Contraseña</label>
              <input
                type="password"
                className={`form-control ${
                  errors.inputpassword ? "border-danger" : ""
                }`}
                id="inputpassword"
                placeholder="Contraseña"
                value={formData.inputpassword}
                onChange={handleChange}
              />
              {errors.inputpassword && (
                <div className="text-danger">{errors.inputpassword}</div>
              )}
            </div>
            <div className="form-group col">
              <label htmlFor="inputpassword2">Confirme la contraseña</label>
              <input
                type="password"
                className={`form-control ${
                  errors.inputpassword2 ? "border-danger" : ""
                }`}
                id="inputpassword2"
                placeholder="Confirme contraseña"
                value={formData.inputpassword2}
                onChange={handleChange}
              />
              {errors.inputpassword2 && (
                <div className="text-danger">{errors.inputpassword2}</div>
              )}
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <button
              className="btn btn-dark text-white w-50 mt-4 fw-semibold shadow-sm"
              id="button2"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="d-flex gap-1 justify-content-center mt-2">
          <div>Volver a la página de inicio</div>
          <a
            href="http://localhost:3000/"
            className="text-decoration-none text-info fw-semibold"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
};


