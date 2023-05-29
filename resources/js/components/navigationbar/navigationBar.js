import React from 'react';

import {  Link } from 'react-router-dom';
export default class NavigationBar extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            activeButton: false
        };

        this.pageNames = ["home", "workflow", "commission", "contact"];

    }



    handleSetActiveButton() {
        this.setState({ activeButton: true });
    }

    //Bootsrap nav
    render() {
        var currentPageName = window.location.pathname.split("/").pop();
        return (
                <div>
                <nav class="navBarContainer">
                    <ul class="navBarItems">


                        {this.pageNames.map((pageName, pageID) => (
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
                </div>
        )
    }
}

