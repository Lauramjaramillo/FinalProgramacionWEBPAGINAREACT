import "bootstrap/dist/css/bootstrap.min.css";
import { NavHomeU } from "../Navbar/Navbar";



function NavAdmVer(props) {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu administrador</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-white">Inventario</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white">Generar registro de ventas</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline text-white">Historial de compras</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Admin() {
    return (
        <div>
            <NavHomeU  title1 ="Inicio" url1="http://localhost:3000/" title2 ="Ingresar" url2="http://localhost:3000/ingresar" title3="Home" url3="http://localhost:3000/comprar"></NavHomeU>
            <NavAdmVer />
        </div>
    );
}

export {Admin};
