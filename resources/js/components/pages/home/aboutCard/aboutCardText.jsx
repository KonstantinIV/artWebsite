import React from 'react';

import { useContext } from 'react';
import { MyContext } from './MyContext';

export default function AboutCardText() {
    const email = "kosta.artist" + "@" + "outlook.com";

    const artistDescription = useContext(MyContext);
    
    return (
        <div className="aboutTextContainer">
            <h3 className="aboutTextHeadline" >
                About
            </h3>
            <p className="aboutText" dangerouslySetInnerHTML={{ __html: artistDescription }}>

            </p>
            <br />
            <div className="aboutContact">
                <p className="aboutContacGreen">Contact</p> <span>:</span>   <p>{email}</p>
            </div>
        </div>
    )
}
