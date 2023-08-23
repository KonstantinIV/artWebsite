import React from 'react';

export default function InfoNavbar({
    topics,
    clickedTopic,
    handleTopic }) {
    var clickedButtonClassName = "infoNavClickedButton";

    return (
        <div className="infoNavBar">

            {topics.map((topic, ID) => (
                <a key={ID}
                    className={(clickedTopic == topic ? ("infoNavItem " + clickedButtonClassName) : "infoNavItem")}
                    onClick={() => handleTopic(topic)}
                    href='/info/digital-art-tools'>

                    {topic}

                </a>
            ))}



        </div>
    );
}
