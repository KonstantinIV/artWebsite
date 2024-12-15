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
 <div class="tooltip">!
        <span class="tooltiptext"><p>
I am mostly active on Instagram and for updates you can follow me on Bluesky or this Website. Wont post much on Facebook and is currently used as a placeholder. 
You still can follow in case situation changes in the future.

</p>
</span>
    </div>
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