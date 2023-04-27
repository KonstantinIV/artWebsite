import * as React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {};
  
  
    }
  
    render() {
      return (


          <div class="galleryNavAndGalleryContainer">

            <div class="galleryNavContainer">
             <div class="galleryNavContainerFirstRow">
                 <div class="galleryNavItem">
                        Digital

                    </div>
                <div class="galleryNavItem">
                        Traditional

                    </div>


            </div>
            <div class="galleryNavContainerSecondRow">
                 <div class="galleryNavItem">
                        Paintings

                    </div>
                <div class="galleryNavItem">
                       Client Work

                    </div>

                    <div class="galleryNavItem">
                        Animation

                    </div>


            </div>
        </div>





            <div class="galleryContainer">
              <div class="gallery">



                  <div class="galleryImageContainer">
                      <img src="img/profile.jpg" class=" galleryImage" alt="..." />

                  </div>


                  <div class="galleryImageContainer">
                      <img src="img/yas.jpeg" class=" galleryImage" alt="..." />

                  </div>

                  <div class="galleryImageContainer">
                      <img src="img/oldman.png" class=" galleryImage" alt="..." />

                  </div>





              </div>
          </div>




          </div>







      )
    }
  }
  
  