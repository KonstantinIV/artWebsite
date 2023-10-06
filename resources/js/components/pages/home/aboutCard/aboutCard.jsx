import React from 'react';

import AboutCardProfileImage from './aboutCardProfileImage';
import AboutCardText from './aboutCardText';
import AboutCardLinks from './aboutCardLinks';

import { MyContext } from "./MyContext";

export default function AboutCard(
  {
    artistDescription
  }
) {

  return (
    <div className="aboutContainer">

      <AboutCardProfileImage />

      <div className="aboutTextAndLinksContainer">

        <MyContext.Provider value={artistDescription}>
          <AboutCardText />
          <div className="aboutLinksContainer">

            <AboutCardLinks />
          </div>

        </MyContext.Provider>

      </div>
    </div>
  )
}