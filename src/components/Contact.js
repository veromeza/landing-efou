import React from "react";

function Contact () {

return(

<section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">¿Listo para comenzar tu próximo proyecto con nosotros? ¡Llámanos o envíanos un correo electrónico y nos pondremos en contacto contigo lo antes posible!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+52 (1) 55-1224-6009</div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                        <a class="d-block" href="mailto:contact@yourwebsite.com">info@efour.mx</a>
                    </div>
                </div>
            </div>
        </section>

)



}

export default Contact;