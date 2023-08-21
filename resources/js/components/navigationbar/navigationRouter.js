import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/home/home';
import Info from '../pages/info/info';
import Contact from '../pages/contact/contact';
import Price from '../pages/price/price';


import NavigationBar from './navigationBar';



function NavigationRouter() {

    return (
        <Router>

            <NavigationBar />

        
            <Routes>

                <Route path="/" exact element={<Home />} />

                {/* <Route path="/price" element={<Price />} />  */}

                <Route path="/info" element={<Info />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>
        </Router>


    )
}
export default NavigationRouter;
