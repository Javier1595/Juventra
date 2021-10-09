document.addEventListener("DOMContentLoaded", function(event) { 
    AgregarFooter();
  });

function AgregarFooter(){
    var foot = document.getElementById("footer");
    foot.innerHTML=`<footer class="atf-footer-area atf-pattern-area">
            <div class="container">
                <div class="atf-footer-top mt-5">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div class="atf-footer-box">
                                <h5><a href=""><img class="atf-footer-logo" src="assets/img/logoj.png" alt="" /></a></h5>
                                <ul class="pr-lg-5">
                                    <li> 300 000 00 <br> (+006) 000 00</li>
                                    <li>juventra@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                            <h5>Quick Links</h5>
                            <ul class="atf-list-menu">
                                <li> <a href="ver_ofertas.html"><i class="fas fa-angle-right mr-2"></i>Ofertas</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-12 atf-footer-link text-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset="0">
                            <h5>Síguenos</h5>
                            <div class="atf-footer-social-icon mt-3 text-left">
                                <a href="#" class="icon"> <i class="fab fa-facebook"></i> </a>
                                <a href="#" class="icon"> <i class="fab fa-dribbble"></i> </a>
                                <a href="#" class="icon"> <i class="fab fa-behance"></i> </a>
                                <a href="#" class="icon"> <i class="fab fa-linkedin"></i> </a>
                                <a href="#" class="icon"> <i class="fab fa-twitter"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="atf-footer-boottom mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xl-5 col-12 my-auto text-lg-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>`;
}