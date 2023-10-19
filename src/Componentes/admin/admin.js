import "bootstrap/dist/css/bootstrap.min.css";


function NavAdmH(props) {
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

function NavAdmVer(props) {
    return (
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu administrador</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline  text-white">Inventario</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline  text-white">Generar registro de ventas</span></a>
                    </li>     
                    <li>
                      <a href="#" class="nav-link px-0 align-middle">
                          <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline  text-white">Historial de compras</span></a>
                  </li> 
                </ul>
                </div>
              </div>
            </div>
          </div>

    );
}

 function Admin () {
    return (
        <fragment>
            <NavAdmH></NavAdmH>
            <NavAdmVer></NavAdmVer>

        </fragment>
      
       

    );
 }

 export {Admin}
