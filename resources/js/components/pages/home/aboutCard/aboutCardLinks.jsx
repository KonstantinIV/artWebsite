import React from 'react';



export default function AboutCardLinks() {

    return ( 


        <div className="aboutLinksContainer">



            <a className="icon-link icon-link-hover aboutLink"  href="https://www.instagram.com/kosta_iv_artist" target='_blank'>
                <img src='img/icons/social-media/instagram.png' className='aboutLinkIcon' alt='instagram icon' fill='currentColor' />
                Instagram
            </a>

            <a className='aboutLink' href='https://www.facebook.com/KostaIV' target='_blank'>
                <img src='img/icons/social-media/facebook.png' className='aboutLinkIcon' alt='facebook icon' fill='currentColor' />
                Facebook
            </a>

            <a className='aboutLink' href='https://twitter.com/Kosta_IV' target='_blank'>
                <img src='img/icons/social-media/twitter.png' className='aboutLinkIcon' alt='Twitter icon' fill='currentColor' />
                Twitter
            </a>

            <br />
            <a disabled className=' aboutLink' href='https://www.artstation.com/kosta_iv' target='_blank'>
                <img src='img/icons/social-media/artstation.png' className='aboutLinkIcon' alt='artstation icon' fill='currentColor' />
                Artstation
            </a>
           
            <a disabled className=' aboutLink' href='https://www.tumblr.com/kosta-iv' target='_blank'>
                <img src='img/icons/social-media/tumblr.png' className='aboutLinkIcon' alt='tumblr icon' fill='currentColor' />
                Tumblr
            </a>

            <a disabled className=' aboutLink' href='https://cara.app/kosta' target='_blank'>
                <img src='img/icons/social-media/cara.png' className='aboutLinkIcon' alt='cara icon' fill='currentColor' />
                Cara
            </a>
 



        </div>


    )

}
