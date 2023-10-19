import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "./assets/pokemon.png"

function NavIndex(props) {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div class="container-fluid">           
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Página principal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Registrarse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Ingresar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Administrador</a>
          </li>          
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button class="btn btn btn-secondary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
    );
}

function TextIndex(props){
    return(
        <div class="position-relative overflow-hidden p-2 p-md-2 m-md-2 text-center bg-light rounded">
    <div class="col-md-5 p-lg-11 mx-auto my-5">
      <h2 class="display-4 fw-normal">Quienes somos</h2>
      <p class="lead fw-normal"><em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quaerat, possimus fugit reprehenderit impedit corporis error ullam saepe nesciunt provident veniam maxime ipsa minima. Voluptates praesentium placeat rerum maxime quae.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquid excepturi molestias sed distinctio odio sint architecto provident rerum est necessitatibus, molestiae porro quos animi iste dolores quod nobis sapiente..</em></p>
      <img class="imageninicio shadow" src={props.img} alt=""> </img>
    </div>      
  </div> 

    );
}

function FooterIndex(props){
    return(
        <footer class="bg-light text-center text-lg-start">

    <div class="container p-1">    
      <div class="row">     
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Contactenos</h5>
          <p>
            Colombia: + 57 300 200 200 200<br />
            Estados unidos: + 1 100 200 200
          </p>
        </div>      
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Siguenos en nuestras redes sociales</h5>
          <p>
           Instagram: miempresa <br />
           Facebook: miempresa<br />
           Youtube: miempresa<br />
          </p>
        </div>      
      </div>    
    </div>
  </footer>
    );
}

function IndexPage(props){
    return(
    <fragment>
        <NavIndex></NavIndex>
        <FooterIndex></FooterIndex>   

    </fragment>
    );
}

export {IndexPage}