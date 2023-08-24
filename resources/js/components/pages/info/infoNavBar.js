import React from 'react';
import { Link } from '@inertiajs/react';


export default function InfoNavbar({
    topicContentMap,
    clickedTopic,
    handleTopic }) {
    var clickedButtonClassName = "infoNavClickedButton";

    return (
        <div className="infoNavBar">

            {Object.keys(topicContentMap).map((topic, ID) => (
                <Link preserveScroll key={ID}
                    className={(clickedTopic == topic ? ("infoNavItem " + clickedButtonClassName) : "infoNavItem")}
                    //onClick={() => handleTopic(topic)}
                    href={'/info/'+topicContentMap[topic]}>

                    {topic}

                </Link>
            ))}



        </div>
    );
}
