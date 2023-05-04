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
        const pageNames = ["home", "workflow","commision", "about"];
        var currentPageName = window.location.pathname.split("/").pop();
        return (
            <Router>
                <nav class="navBarContainer">
                    <ul class="navBarItems">


                        {pageNames.map((pageName, pageID) => (
                            <li class="navBarLinkContainer">



                                {//Home also acts as base url so if there is no page name in url
                                 //ending then it will make the home button backround also colered
                                }
                                <Link
                                    to={"/" + (pageName == "home" ? "" : pageName)}
                                    key={pageID}
                                    className={"navBarLink " +
                                        (
                                            pageName == "home" ?
                                                (pageName == currentPageName || currentPageName == "" ? "activeBut" : "")
                                                :
                                                (pageName == currentPageName ? "activeBut" : "")
                                        )

                                    }
                                    onClick={() => this.handleSetActiveButton()}

                                >

                                    {(pageName == "home" || "" ? "home / gallery" : pageName)
}
                                </Link>

                            </li>

                        ))}







                    </ul>




                </nav>
            </Router>
        )
    }
}

