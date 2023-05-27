import React from 'react';
import ReactDOM from 'react-dom';


import NavigationRouter from './NavigationRouter';

import NavigationBar from './navigationbar/NavigationBar';
import WebsiteLogo from './logo/WebsiteLogo';


import Footer from './footer/Footer';

import Gallery from './pages/gallery/gallery'

class Main extends React.Component{
    constructor(props) {
        super(props);

    this.state = {};
   

    }
         

    render(){
        

      return(

        <div>       

            



         <WebsiteLogo/>
         <NavigationBar/>

          <NavigationRouter />
          
         <Gallery />
         <Footer />

        </div>
        
  

        
        
        )
    }
}

//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));