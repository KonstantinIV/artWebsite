import React from 'react';

function ContactInfo() {

  const email = 'kosta.artist' + '@' + 'outlook.com';

  return (
    <div className='contactInfoContainer'>
      <h2 className='contactInfoHeader'>
        Contact Info / Links
      </h2>



      <div className='aboutLinksContainer aboutLinksContainerContactInfo'>


        <a className='aboutLink' href='https://twitter.com/Kosta_IV' target='_blank'>
        <img src='img/icons/social-media/twitter.svg' className='aboutLinkIcon' alt='...' fill='currentColor' /> 
        Twitter
        </a>

        <a disabled className=' aboutLink' href='https://www.artstation.com/kosta9' target='_blank'>
          <img src='img/icons/social-media/artstation.svg' className='aboutLinkIcon' alt='...' fill='currentColor' />
          Artstation
        </a>

        <a className='aboutLink' href='https://www.facebook.com/KostaIV' target='_blank'>
          <img src='img/icons/social-media/facebook.svg' className='aboutLinkIcon' alt='...' fill='currentColor' />
          Facebook
        </a>




      </div>

      <div className='aboutContact'>
        <p className='aboutContacGreen'>Contact</p> <span>:</span>   <p>{email}</p>
      </div>
    </div>

  )
}
export default ContactInfo;
