import React from 'react';
import { useState } from "react";

import InfoNavbar from "./infoNavBar";



import InfoArticle from './infoArticle';

import Layout from "../../layout/layout";


export default function Info(props) {
  const [clickedTopic, setTopic] = useState("Digital art tools");


  const topics = ["Digital art tools", "Commission process", "Rights and usage"];
 /* const topicContentMap = {
    'Digital art tools': InfoDigitalArtTools,
    'Commission process': InfoCommissionProcess,
    'Rights and usage': InfoRightsAndUsage,
    // Add more topics and corresponding content components as needed
  };*/
  //const TopicContentComponent = topicContentMap[clickedTopic];

  const handleTopic = (topic) => {
    setTopic(topic);
  };
  return (

    <Layout title="Info">

      <div className='infoContainer'>

        <InfoNavbar
          topics={topics}
          clickedTopic={clickedTopic}
          handleTopic={handleTopic}
        />

       <InfoArticle 
       article={props.infoArticle}
       />

      </div>
    </Layout>




  )
}

/*    {topics.map(topic => (
                //<InfoDigitalArtTools />

            ))} */