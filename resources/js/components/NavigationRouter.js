import React from 'react';

import  {BrowserRouter as Router,
    Routes,
     Route,
     Link
 }  from 'react-router-dom';

 import Home from './pages/home/Home';





export default class NavigationRouter extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {};
   

    }
    
    render(){
      return(
        <Router>
        <Routes>
        
          <Route path="/" element={<Home />} >
              
          </Route>


          <Route path="/about" element={<Home />} >
              
          </Route>

      
        </Routes>
    </Router>
        
        
        )
    }
}

