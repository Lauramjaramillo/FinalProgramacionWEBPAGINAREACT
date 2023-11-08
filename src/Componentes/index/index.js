import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "./assets/pokemon.png";
import { NavHomeU } from "../Navbar/Navbar.js";

function TextIndex(props) {
  const loremText = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
    quaerat, possimus fugit reprehenderit impedit corporis error ullam
    saepe nesciunt provident veniam maxime ipsa minima. Voluptates
    praesentium placeat rerum maxime quae. Lorem ipsum dolor sit amet
    consectetur, adipisicing elit. Harum aliquid excepturi molestias sed
    distinctio odio sint architecto provident rerum est necessitatibus,
    molestiae porro quos animi iste dolores quod nobis sapiente.
  `;

  return (
    <div className="position-relative overflow-hidden p-2 p-md-2 m-md-2 text-center bg-light rounded">
      <div className="col-md-5 p-lg-11 mx-auto my-5">
        <h2 className="display-4 fw-normal">Quienes somos</h2>
        <p className="lead fw-normal">
          <em>{loremText}</em>
        </p>
        <img
          className="imageninicio shadow"
          src={props.img}
          alt=""
          style={{ height: "4rem" }}
        />
      </div>
    </div>
  );
}

function FooterIndex(props) {
  const contactInfo = {
    Colombia: "+57 300 200 200 200",
    "Estados Unidos": "+1 100 200 200",
  };

  const socialLinks = [
    "Instagram: miempresa",
    "Facebook: miempresa",
    "Youtube: miempresa",
  ];

  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="container p-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contactenos</h5>
            <p>
              {Object.entries(contactInfo).map(([location, number]) => (
                <div key={location}>
                  {location}: {number}
                  <br />
                </div>
              ))}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              Siguenos en nuestras redes sociales
            </h5>
            <p>
              {socialLinks.map((link) => (
                <div key={link}>
                  {link}
                  <br />
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IndexPage(props) {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <NavHomeU
        title1="Ingresar"
        url1="http://localhost:3000/ingresar"
        title2="Registro"
        url2="http://localhost:3000/registro"
      ></NavHomeU>

      <TextIndex img={Pokemon} />
      <FooterIndex />
    </div>
  );
}

export { IndexPage };
