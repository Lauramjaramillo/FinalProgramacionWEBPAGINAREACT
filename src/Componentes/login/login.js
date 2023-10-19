import "bootstrap/dist/css/bootstrap.min.css";
import usuario from "./assets/usuario.svg"
import username from "./assets/username-icon.svg"
import password from "./assets/password-icon.svg"




function Login(props) {
    return (
    <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="bg-light p-5 rounded-5 text-dark shadow">
        <div class="d-flex justify-content-center">
          <img
            src={usuario}
            alt="login-icon"
            style={{height: '5rem'}}
          />
        </div>
        <div class="text-center fs-2 fw-bold">Acceso</div>
        <div class="input-group mt-4">
          <div class="input-group-text bg-dark">
            <img
              src={username}
              alt="username-icon"
              style={{height: '1rem'}}
            />
          </div>
          <input
            class="form-control bg-light"
            type="text"
            placeholder="Usuario"
            id ="usuario"
          />
        </div>
        <div class="input-group mt-1">
          <div class="input-group-text bg-dark">
            <img src={password} alt="password-icon" style={{height: '1rem'}}/>
          </div>
          <input
            class="form-control bg-light"
            type="password"
            placeholder="Contraseña"
            id="contraseña"
          />
        </div>
        <div class="d-flex justify-content-around mt-1">
          <div class="d-flex align-items-center gap-1">
            <input class="form-check-input" type="checkbox" />
            <div class="pt-1">Recuérdame</div>
          </div>
          <div class="pt-1"> 
            <a
              href="#"
              class="text-decoration-none text-info fw-semibold fst-italic"
              
              >¿Olvidaste tu contraseña?</a
            >
          </div>
        </div>
        <div class="btn btn-dark text-white w-100 mt-4 fw-semibold shadow-sm" id="button" type="submit">
          Ingresar
        </div>
        <div class="d-flex gap-1 justify-content-center mt-1">
          <div>¿Aún no tienes una cuenta?</div>
          <a href="#" class="text-decoration-none text-info fw-semibold"
            >Registrarse</a
          >
        </div>
        <div class="d-flex gap-1 justify-content-center mt-2">
          <div>Volver a la página de inicio</div>
          <a href="#" class="text-decoration-none text-info fw-semibold">Inicio</a
          >
        </div>
     
      
        </div>
        </div>
      
        
    );
  }
  

export { Login };
