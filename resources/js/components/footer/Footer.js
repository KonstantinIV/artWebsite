import React from 'react';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {};
   

    }
    
    render(){
      return(
     
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header"> Home</div>

                    <div className="card-body">I'm an example component!</div>
                </div>
            </div>
        </div>
    </div>

        
        
        )
    }
}

