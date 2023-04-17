import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {};
   

    }
    
    render(){
      return(
    
<div class="container aboutContainer d-flex">

<div class="row ">

  <div class="col-sm-6 mb-3 mb-sm-0 flex-grow-1">
  <img src="img/profile.jpg" class="img-thumbnail aboutProfileImage" alt="..." />

  </div>

  <div class="row flex-nowrap flex-grow-2">

  <div class="col-sm-6 flex-grow-2" >
        Digital and traditional artist
  </div>
  <div class="col-sm-6 flex-grow-1">
        Links
        links 
        links
  </div>
</div>


</div>
</div>

        
        
        )
    }
}

