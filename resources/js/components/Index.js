import React from 'react';
import ReactDOM from 'react-dom';


//import   Route from 'react-router-dom/Route';

import NavigationRouter from './NavigationRouter';

import NavigationBar from './navigationbar/NavigationBar';
import Footer from './footer/Footer';



class Main extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {};
   

    }
    
    render(){
      return(
     
        <div>
        <NavigationBar/>
        
        <NavigationRouter />
          

        <Footer />

        </div>
        
  

        
        
        )
    }
}

//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));