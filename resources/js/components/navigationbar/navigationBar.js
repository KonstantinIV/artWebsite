import React from 'react';

import {  useState } from "react";
import { Link } from 'react-router-dom';


function NavigationBar() {
    // State variables
    const [activeButton, setActiveButton] = useState(false);

    // Other constants
    const pageNames = ["home", "workflow", "commission", "contact"];
    var currentPageName = window.location.pathname.split("/").pop();


    // Event handlers
    const handleSetActiveButton = () => {
        setActiveButton(true)
    };


    return (
        <div>
            <nav className="navBarContainer">
                <ul className="navBarItems">


                    {pageNames.map((pageName, pageID) => (
                        <li key={pageID} className="navBarLinkContainer">



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
                                onClick={() => handleSetActiveButton()} >
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



export default NavigationBar;
