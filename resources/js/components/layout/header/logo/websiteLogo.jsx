import React from 'react';

export default function WebsiteLogo() {

    return (
        <div className="kostaLogoContainer">
            <div className="kostaLogo">
                <a className="" href="/">
                    <img loading="lazy" src="/img/icons/kosta-logo.png" alt="artWebsiteLogo-Kosta-artist" width="400" height="127"/>
                </a>
            </div>
            <div className="kostaLogoTextContainer">
                <div className="kostaLogoText">ARTIST</div>
                <div className="kostaLogoLine"></div>
            </div>
        </div>

    )
}

