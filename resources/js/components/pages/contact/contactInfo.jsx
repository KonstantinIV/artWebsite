import React from 'react';

import AboutCardLinks from '../home/aboutCard/aboutCardLinks';

export default function ContactInfo() {

  const email = 'rosenhart.artist' + '@' + 'outlook.com';

  return (
    <div className='contactInfoContainer'>
      <h2 className='contactInfoHeader'>
        Contact Info / Links
      </h2>



      <div className='aboutLinksContainer aboutLinksContainerContactInfo'>


      <AboutCardLinks />




      </div>

      <div className='aboutContact'>
        <p className='aboutContacGreen'>Contact</p> <span>:</span>   <p>{email}</p>
      </div>
    </div>

  )
}

