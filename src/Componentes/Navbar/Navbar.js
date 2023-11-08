import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function NavHomeU(props) {
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
              <a className="nav-link active" href={props.url1}>
                {props.title1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href={props.url2}>
                {props.title2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href={props.url3}>
                {props.title3}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href={props.url4}>
                {props.title4}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { NavHomeU };
