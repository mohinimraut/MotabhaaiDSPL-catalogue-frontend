import React, { Component } from 'react'

export default class Carousel2 extends Component {
    render() {
        return (
            <div>
                <div id="aboutcontainer" className="container-fluid inspirationconumain">
                    <div className="row" id="sidebottom"></div>
                    <div class="row justify-content-center text-center" >
                    </div>
                    <div class="row justify-content-center text-center">
                    <p id="Inspirationpara" style={{color:"#2C3D63"}}></p>
                    </div>
                    <div className="row justify-content-center" id="Inspirationmaincont">
                    <div class="container-fluid">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="row justify-content-center text-center">
                    <div className="carousel-inner">



<div className="carousel-item active" data-bs-interval="1000">
            <div class="row">
                    <div className="col-lg-2">
                    <img id="Inspirationimg" src="logo512.png" className="card-img-top" alt="home img"/>
                    img3
                    </div>
        

        <div className="col-lg-2">
                    <img id="Inspirationimg" src="logo512.png" className="card-img-top" alt="home img"/>
                    img4
                    </div>
        
      </div>  
</div>

<div className="carousel-item" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-2">
 <img id="Inspirationimg" src="logo512.png" className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">img2</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            </p>
          </div>
        </div>
        
      </div>       
</div>


<div className="carousel-item" data-bs-interval="1000">
<div class="row justify-content-center text-center">
<div className="col-lg-2">
 <img id="Inspirationimg" src="logo512.png" className="card-img-top" alt="home img"/>
</div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center" >
            <p id="inspirationhead1">img5</p>
          </div>
          <div class="row">
            <p id="inspirationpara1">
            
            </p>
          </div>
        </div>
      </div>  
</div>



      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
            </div>
        )
    }
}
