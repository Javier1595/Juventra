document.addEventListener("DOMContentLoaded", function(event) { 
    AgregarHeader();
  });

function AgregarHeader(){
    var menu = document.getElementById("header");
    menu.innerHTML=`<header class="atf-site-header atf-style1 atf-sticky-header">
            <div class="atf-top-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <div class="atf-top-header-in wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="nav-right-part nav-right-part-desktop">
                                <ul>
                                    <li class=""><a class="login-btn" href="login.html">Iniciar Sesi&oacuten</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="atf-main-header">
                <div class="container">
                    <div class="atf-main-header-in">
                        <div class="atf-main-header-left">
                            <a class="atf-site-branding atf-white-logo" href="index.html"><img src="assets/img/logoj.png" alt="Logo"></a>
                        </div>
                        <div class="nav-right-part nav-right-part-mobile">
                            <ul>
                                <li class=""><a class="login-btn" href="login.html">Iniciar Sesi&oacuten</a></li>
                            </ul>
                        </div>
                        <div class="atf-main-header-right">
                            <div class="atf-nav">
                                <ul class="atf-nav-list atf-onepage-nav">
                                    <li><a href="index.html">Inicio</a></li>
                                    <li><a href="crear_usuario.html">Usuario</a></li>
                                    <li><a href="ver_ofertas.html">Ofertas</a></li>
                                    <li><a href="ver_categorias.html">Categor&iacuteas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section id="home">
            <div class="atf-single-home atf-hero-area" style="background-color: #636363; height: 120px;">
            </div>				
        </section>`;
}