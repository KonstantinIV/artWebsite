import React from 'react';
import { useState } from "react";
import { useRemember } from '@inertiajs/react';
import InfoNavbar from "./infoNavBar";



import InfoArticle from './infoArticle';

import Layout from "../../layout/layout";


export default function Info(props) {
  const pathParts = window.location.pathname.split("/");
  const lastPart = pathParts.pop();
  const currentTopic = lastPart.charAt(0).toUpperCase() + lastPart.replace(/-/g, " ").slice(1); ;


  //const topics = ["Digital art tools", "Commission process", "Rights and usage"];
 const topicContentMap = {
    'Digital art tools': "digital-art-tools",
    'Commission process': "commission-process",
    'Rights and usage': "digital-art-toolsss",
    // Add more topics and corresponding content components as needed
  };


  const [clickedTopic, setTopic] = useState(currentTopic);

 /* const handleTopic = (topic) => {
    setTopic(topic);
  };*/
  return (

    <Layout title="Info">

      <div className='infoContainer'>

        <InfoNavbar
          topicContentMap={topicContentMap}
          clickedTopic={currentTopic}
          //handleTopic={handleTopic}
        />

       <InfoArticle 
       article={props.infoArticle}
       />

      </div>
    </Layout>




  )
}
