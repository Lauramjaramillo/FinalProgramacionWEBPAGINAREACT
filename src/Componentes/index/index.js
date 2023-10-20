import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './assets/pokemon.png';

function NavIndex(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Página principal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Registrarse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Ingresar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Administrador
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

function TextIndex(props) {
  return (
    <div className="position-relative overflow-hidden p-2 p-md-2 m-md-2 text-center bg-light rounded">
      <div className="col-md-5 p-lg-11 mx-auto my-5">
        <h2 className="display-4 fw-normal">Quienes somos</h2>
        <p className="lead fw-normal">
          <em>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            quaerat, possimus fugit reprehenderit impedit corporis error ullam
            saepe nesciunt provident veniam maxime ipsa minima. Voluptates
            praesentium placeat rerum maxime quae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Harum aliquid excepturi molestias sed
            distinctio odio sint architecto provident rerum est necessitatibus,
            molestiae porro quos animi iste dolores quod nobis sapiente.
          </em>
        </p>
        <img
          className="imageninicio shadow"
          src={props.img}
          alt=""
          style={{ height: '4rem' }}
        />
      </div>
    </div>
  );
}

function FooterIndex(props) {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom"> {/* Add 'fixed-bottom' class */}
      <div className="container p-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contactenos</h5>
            <p>
              Colombia: +57 300 200 200 200
              <br />
              Estados Unidos: +1 100 200 200
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Siguenos en nuestras redes sociales</h5>
            <p>
              Instagram: miempresa
              <br />
              Facebook: miempresa
              <br />
              Youtube: miempresa
              <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IndexPage(props) {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <NavIndex />
      <TextIndex img={Pokemon} />
      <FooterIndex />
    </div>
  );
}

export { IndexPage };
