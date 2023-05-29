import React from 'react';
import ReactDOM from 'react-dom';



import WebsiteLogo from './logo/websiteLogo';
import NavigationRouter from './navigationRouter';
import Footer from './footer/footer';


class Main extends React.Component{
    constructor(props) {
        super(props);

    this.state = {};
   

    }
         

    render(){
        

      return(

        <div>       

         <WebsiteLogo/>

          <NavigationRouter />
          
         <Footer />

        </div>
        
        
        
        )
    }
}

//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));