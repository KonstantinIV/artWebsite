import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route} from 'react-router-dom';

import Home from './pages/home/home';
import Commission from './pages/commission/commission';
import Contact from './pages/contact/contact';

import NavigationBar from './navigationbar/navigationBar';



function NavigationRouter() {
  
    return (
        <Router>

        <NavigationBar/>
 
        
            <Routes>

                <Route path="/" exact element={<Home />} />

                <Route path="/commission" element={<Commission />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>
        </Router>


    )
}
export default NavigationRouter;
