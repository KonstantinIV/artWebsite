import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class NavigationBar extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            activeButton: false
        };


    }



    handleSetActiveButton() {
        this.setState({ activeButton: true });
    }

    //Bootsrap nav
    render() {
        const pageNames = ["home", "portfolio", "about"];
        var currentPageName = window.location.pathname.split("/").pop();
        return (
            <Router>
                <nav class="navBarContainer">
                    <ul class="navBarItems">


                        {pageNames.map(pageName => (
                            <li class="navBarLinkContainer">

                                <Link 
                                to={"/" + pageName}
                                className={"navBarLink " + (pageName == currentPageName ? "activeBut" : "")}
                                onClick={() => this.handleSetActiveButton()}
                                
                                > 
                                
                                {pageName}
                                </Link>

                            </li>

                        ))}







                    </ul>




                </nav>
            </Router>
        )
    }
}

