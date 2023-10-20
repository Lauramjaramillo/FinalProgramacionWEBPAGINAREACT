import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import React, { useState, useEffect } from "react";

function NavHome(props) {
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

function Card(props) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data)
      });
  }, []);

  return pokemon ? (
    <div className="" style={{ width: "310px", border: "1px solid black" }} key={pokemon.id}>
      <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <p className="card-text">

        </p>
        <a href="#" className="btn btn-dark btn-sm">
          Agregar al carrito
        </a>
      </div>
    </div>
  ) : null
}

function App() {
  const [data, setData] = useState([]);



  useEffect(() => {
    //Fetch para extraer datos del pokemon

    // if (!loaded) {

    // pokemons.forEach((pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setData((arrayViejo) => [
        //   ...arrayViejo,data
        //   // <Card key={data.id} title={data.name} img={data.sprites.front_default}></Card>,
        // ]);
        setData(data)
      });
  }, []);

  // setLoaded(true);
  // }
  // }, []);

  return data?.results ? (
    <div className="App">

      {/* <div className="container d-flex justify-content-around gap-4">{data}</div> */}
      {<div className="container d-grid justify-content-around gap-4" style={{ width: "800px", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {data.results.map(item => <Card key={item.id} name={item.name} />)}
      </div>}

    </div>
  ) : null
}




function Home(props) {
  return (
    <>
      <NavHome />
      <div className="titulos">
        <h1>ISIS SHOP</h1>
      </div>

      <App></App>


    </>
  );
}

export { Home }