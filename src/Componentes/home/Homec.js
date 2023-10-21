import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React, { useState, useEffect } from 'react';


function NavHomec(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Perfil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Historial de compras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Configuración
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Cerrar sesión
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Cardc(props) {
  const { product } = props;

  return product ? (
    
      <div className="col " style={{ padding: "3rem" }}>
        <div className="card text-center h-100" style={{ width: "13rem" }}>
          <img src={product.images[0]} className="card-img-top w-100 h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-dark btn-sm">
              Agregar al carrito
            </a>
          </div>
        </div>
      </div>
    
  ) :null;
}

function Appc() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return data ? (
    <div className="App">
      <div class="row row-cols-1 row-cols-md-4 g-4">

        {data.products && data.products.map((item) => (
          <Cardc key={item.id} product={item} />

        ))}
      </div>
    </div>
  ) : null;
}

function Homec(props) {
  return (
    <>
      <NavHomec />
      <div className="titulos">
        <h1>ISIS SHOP</h1>
      </div>
      <Appc />
    </>
  );
}

export { Homec };
