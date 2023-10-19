import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./assets/Registro.svg"

function Logut(props) {
  
    return (
    <div class="d-flex justify-content-center align-items-center vh-100">
    <div
      class="bg-light p-5 rounded-5 text-dark shadow"
      style={{width: '60%'}}
    >
      <div class="d-flex justify-content-center">
        <img
          src={Registro}
          alt="login-icon"
          style={{height: '4rem'}}
        />
      </div>
      <div class="text-center fs-2 fw-bold">Registro</div>
      <form>                    
        <div class="row align-items-center mt-3 p-1">
          <div class="form-group col">
            <label for="inputname1">Primer nombre</label>
            <input type="text" class="form-control" id="inputname1" placeholder="Primer nombre"/> 
          </div>
          <div class="form-group col">
            <label for="inputname2">Segundo nombre</label>
            <input type="text" class="form-control" id="inputname2" placeholder="Segundo nombre"/>
          </div>
        </div>
        <div class="row align-items-center p-1">
          <div class="form-group col">
            <label for="inputlast1">Primer apellido</label>
            <input type="text" class="form-control" id="inputlast1" placeholder="Primer apellido"/>
          </div>
          <div class="form-group col">
            <label for="inputname2">Segundo apellido</label>
            <input type="text" class="form-control" id="inputlast2" placeholder="Segundo apellido"/>
          </div>
        </div>
        <div class="row align-items-center p-1">
          <div class="form-group col">
            <label for="inputemail">Correo electrónico</label>
            <input type="email" class="form-control" id="inputemail" placeholder="abc@email.com"/>
          </div>
          <div class="form-group col">
            <label for="inputAddress1">Dirección</label>
            <input type="text" class="form-control" id="inputAddress1" placeholder="Dirección residencia"/>
          </div>
        </div>
        <div class="row align-items-center p-1">
          <div class="form-group col">
            <label for="inputpassword">Contraseña</label>
            <input type="password" class="form-control" id="inputpassword" placeholder="Contraseña"/>
          </div>
          <div class="form-group col">
            <label for="inputpassword2">Confirme la contraseña</label>
            <input type="password" class="form-control" id="inputpassword2" placeholder="Confirme contraseña"/>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="btn btn-dark text-white w-50 mt-4 fw-semibold shadow-sm" id="button2" type="submit">
            Ingresar
          </div>
        </div>

        
      </form>
      <div class="d-flex gap-1 justify-content-center mt-2">
        <div>Volver a la página de inicio</div>
        <a href="#" class="text-decoration-none text-info fw-semibold"
          >Inicio</a
        >
      </div>
    </div>
  </div>

    );
}

export{Logut}