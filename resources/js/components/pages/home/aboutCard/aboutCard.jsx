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
Currently I am focused on prioritizing sharpening my skills and therefore I am not currently very active on social medias, so they are currently more like placeholders. But you still can give a follow if you choose so on the platforms you use. 
</p>
<p>
  Also with all the AI generative content and the upcoming AI videos are going to make sharing on social media more difficult and time consuming to compete with others, not to mention some if not most social media platforms already have changed their terms in a way that allows them to use the posted content to train their AI models which not sits very well with me, atleast for now.
</p></span>
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