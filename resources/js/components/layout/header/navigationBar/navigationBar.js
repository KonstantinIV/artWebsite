import React from 'react';

import { useEffect, useState } from "react";
import { Link } from '@inertiajs/react';

export default function NavigationBar() { 
    // State variables
    const pageName = window.location.pathname.split("/").pop() ;
    const setPageName = (pageName != "") ? "home" : pageName;

    const [currentPageName, setActiveButton] = useState(setPageName);



    // Other constants
    //const pageNames = ["home", "price", "info", "contact"];
    const pageNames = ["home",  "info", "contact"];

    // Event handlers
    const handleSetActiveButton = (pageName) => {
        //const currentPageName = window.location.pathname.split("/").pop();

        setActiveButton(pageName) 
    };

    useEffect(() => {
        const currentPageName = window.location.pathname.split("/").pop();        
        setActiveButton(currentPageName) 
      }, []);
      

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
                                href={"/" + (pageName == "home" ? "" : pageName)}
                                key={pageID}
                                className={"navBarLink " +
                                    (
                                        pageName == "home" ?
                                            (pageName == currentPageName || currentPageName == "" ? "activeBut" : "")
                                            :
                                            (pageName == currentPageName ? "activeBut" : "")
                                    )

                                }
                                onClick={() => handleSetActiveButton(pageName)} >
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


