import React from "react";

function Portfolio() {

return(
<section id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div className="portfolio-box-caption">
                            <a href="https://maisonmanila.com/" target="_blank">
                                <div className="project-category text-white-50">VER PÁGINA</div>
                                </a>
                                <div className="project-name">Maison Manila</div>
                            </div></a>
                        
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50"></div>
                                <div className="project-name">Bidó</div>
                            </div></a>
                        
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div className="portfolio-box-caption">
                            <a href="https://clone-airbnb.netlify.com/" target="_blank">
                                <div className="project-category text-white-50">VER PÁGINA</div></a>
                                <div className="project-name">Airbnb Clone</div>
                            </div></a>
                        
                    </div>
                    
                </div>
            </div>
        </section>


)



}

export default Portfolio;