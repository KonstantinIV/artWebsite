import React from 'react';

import { useContext } from 'react';
import { MyContext } from './MyContext';

export default function AboutCardText() {
    const email = "rosenhart.artist" + "@" + "outlook.com";

    const artistDescription = useContext(MyContext);

    return (
        <main className="aboutTextContainer">
            <article>

                <h1 className="aboutTextHeadline" >
                    About
                </h1>
                <p className="aboutText" dangerouslySetInnerHTML={{ __html: artistDescription }}>

                </p>
                <br />
                <div className="aboutContact">
                    <p className="aboutContacGreen">Contact</p> <span>:</span>   <p>{email}</p>
                </div>
            </article>

        </main>
    )
}
