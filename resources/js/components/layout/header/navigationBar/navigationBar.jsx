import React from 'react';

import { useState } from 'react';
import { Link } from '@inertiajs/react';
import classNames from 'classnames';


export default function NavigationBar({urlRoute}) {

    //Get current page name to highlight the button in navnar
   // const pathParts = window.location.pathname.split('/');
   // const pageName = pathParts[1];
    //state
    const [currentPageName, setActiveButton] = useState(urlRoute);

    const absoluteUrl = "https://kostaartist.com/";
    // Available page names
    const pageNames = ['home', 'info', 'contact'];


    // Hightlight other navbutton after chaning pages
    const handleSetActiveButton = (pageName) => {
        setActiveButton(pageName)
    };


    //set classnames / styling for each button depending on the current page
    //If url is empty it also points to home
    //Base class is navbarlink + activebut
    const returnClassnames = (pageName) => {
        return classNames('navBarLink', {
            activeBut: pageName === currentPageName || (pageName === 'home' && currentPageName === '')
        });
    }
    //Link
    const navBarLink = (pageName) => {
        return '/' + (pageName == 'home' ? '' : pageName);
    }

    //Show custom pagename, example if page is home show 'home / gallery' for better user experience
    const navBarString = (pageName) => {
        return (pageName == 'home' || '' ? 'home / gallery' : pageName);
    }


    return (

        
            <nav className='navBarContainer'>
                <ul className='navBarItems'>


                    {pageNames.map((pageName, pageID) => (
                        <li key={pageID} className='navBarLinkContainer'>

                            <Link
                                preserveScroll
                                href={navBarLink(pageName)}
                                only={['info']}
                                key={pageID}
                                className={returnClassnames(pageName)}
                                onClick={() => handleSetActiveButton(pageName)}
                            >

                                {navBarString(pageName)}

                            </Link>

                        </li>

                    ))}

                </ul>




            </nav>
      
    )

}


