import React from 'react';
import ReactDOM from 'react-dom';


import WebsiteLogo from './logo/websiteLogo';
import NavigationRouter from './navigationbar/navigationRouter';
import Footer from './footer/footer';





function Main() {
  
    return(

        <div className='bodyContainer'>       


                <div className='backgroundDesignBox2'>

            </div>
            <div className='backgroundDesignBox3'>

            </div>
            <div className='backgroundDesignBox4'>

            </div>
            <div className='backgroundDesignBox5'>

            </div>
            <div className='backgroundDesignBox6'>

            </div>

           

         <WebsiteLogo/>

          <NavigationRouter />
          
         <Footer />

        </div>
        
        
        
        )
}



//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));