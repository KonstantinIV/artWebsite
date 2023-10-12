import React from 'react';

import Layout from '../../layout/layout';

import InfoNavbar from './infoNavBar';
import InfoArticle from './infoArticle';

export default function Info(props) {

  //Set initial topic if user clicks on info .
  //const pathParts = window.location.pathname.split('/');
  //let lastPart = pathParts.pop();
  let lastPart = props.articleUrl;
  let currentTopic = lastPart.charAt(0).toUpperCase() + lastPart.replace(/-/g, ' ').slice(1);

  if (lastPart === 'info') {
    currentTopic = 'Digital art tools'; 
  }
  //Existing topics
  const topicContentMap = {
    'Digital art tools': 'digital-art-tools',
    'Commission process': 'commission-process',
    'Rights and usage': 'rights-and-usage',
    // Add more topics and corresponding content components as needed
  };
  return (
    <Layout title='Info - Kosta | Art' urlRoute={props.urlRoute}>

      <div className='infoContainer'>
        <InfoNavbar
          topicContentMap={topicContentMap}
          clickedTopic={currentTopic}
        />

        <InfoArticle
          article={props.infoArticle}
        />
      </div>
    </Layout>
  )
}
