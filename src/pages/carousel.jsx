import Carousel from "react-bootstrap/Carousel";
import "./About.css";
import React from "react";
function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      {/* ------------slise1 ---------------*/}
      <Carousel.Item>
        <section className="cont">
          <img
            className="imagen"
            src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/portada.jpg?raw=true"
            alt="portada"
          />
          <br />
          <br />
          <h1 className="portadaH1">Nuestros servicios</h1>
          <br />
          <br />
        </section>
        <section class="cont" id="hero">
          <div class="container">
            <div class="row cards">
              <div class="col-md-4 d-flex justify-content-center">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <img
                      src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/medicos.jpg?raw=true"
                      class="imagen"
                      alt="Medicina"
                    />
                    <h5 class="card-title">Medicina</h5>
                    <p class="card-text">
                      Todas las especialidades disponibles
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <img
                      src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img2.jpg?raw=true"
                      class="imagen"
                      alt="Urgencia"
                    />
                    <h5 class="card-title">Urgencias</h5>
                    <p class="card-text">
                      Servicio de urgencias disponibles 24/7.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <img
                      src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img3.jpg?raw=true"
                      class="img"
                      alt="Farmacia"
                    />
                    <h5 class="card-title">Farmacia</h5>
                    <p class="card-text">Contamos con servicio de farmacia.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <img
                      src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/icono.png?raw=true"
                      class="icon"
                      alt="Ver mas"
                    />

                    <h5 class="card-title">Mas especialidades</h5>
                    <p class="card-text">
                      Ingrese para ver mas especialidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ------------slise2 ---------------*/}
      <Carousel.Item>
        <section id="Ventajas" className="cont">
          <br />
          <br />
          <div class="container">
            <div class="row align-items-center">
              <div class="col">
                <img
                  src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img4.jpg?raw=true"
                  class="imagen"
                  alt="JOIN"
                />
              </div>
              <div class="col text-col">
                <h1 className="ventajas">ventajas</h1>
                <p>Desde nuestra plataforma podra:</p>
                <p> - Verificar los médicos asociados a su obra social</p>
                <p> - Verificar médicos por especialidad</p>
                <p> - Obtener datos de contacto de especialistas</p>
                <p> - Solicitar turnos a los médicos asociados</p>
                <p> - Y mucho mas...</p>
                <p> - Registrese de manera gratuita:</p>
                <p>
                  <a class="nav-link" href="/Login">
                    Registrate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ------------slise3 ---------------*/}
      <Carousel.Item>
        <section id="projects" className="cont">
          <br />
          <br />
          <br />
          <div class="container">
            <div class="row align-items-center projects">
              <div class="col">
                <h1 className="portadaH1">Noticias</h1>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <div class="card mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7080.839363337465!2d-59.00589693760377!3d-27.456190823519265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1599654025043!5m2!1ses!2sar"
                    className="map"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                  <div class="card-body">
                    <h5 class="card-title">CONSULTORIOS MAS CERCANOS</h5>
                    <p class="card-text">
                      Mapa con consultorios adheridos mas cercanos.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-3">
                  <img
                    src="https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_inicio/img11.jpg?raw=true"
                    class="card-img-tamano"
                    alt="Como adherirte"
                  />
                  <div class="card-body">
                    <h5 class="card-title1">Como sacar turno?</h5>
                    <p class="card-text1">
                      Crea un usuario y ya podes sacar un turno!{" "}
                    </p>

                    <a class="nav-link" href="/Login">
                      Registrarse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ------------slise4 ---------------*/}
    </Carousel>
  );
}

export default DarkVariantExample;
