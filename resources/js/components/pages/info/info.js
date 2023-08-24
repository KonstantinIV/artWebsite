import React from 'react';

import InfoNavbar from "./infoNavBar";
import InfoArticle from './infoArticle';

import Layout from "../../layout/layout";
import { Head } from '@inertiajs/react'


export default function Info(props) {
  const pathParts = window.location.pathname.split("/");
  let lastPart = pathParts.pop();
  let currentTopic = lastPart.charAt(0).toUpperCase() + lastPart.replace(/-/g, " ").slice(1); 
  if(lastPart === "info"){
    currentTopic = "Digital art tools";
  }

 const topicContentMap = {
    'Digital art tools': "digital-art-tools",
    'Commission process': "commission-process",
    'Rights and usage': "rights-and-usage",
    // Add more topics and corresponding content components as needed
  };
  return (
    <Layout >
      <Head title="Your page title" />

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
