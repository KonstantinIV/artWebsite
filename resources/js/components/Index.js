import React from 'react';
import ReactDOM from 'react-dom';


import WebsiteLogo from './logo/websiteLogo';
import NavigationRouter from './navigationRouter';
import Footer from './footer/footer';





function Main() {
  
    return(

        <div>       

         <WebsiteLogo/>

          <NavigationRouter />
          
         <Footer />

        </div>
        
        
        
        )
}



//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));