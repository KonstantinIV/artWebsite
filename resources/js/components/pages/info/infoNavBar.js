import React from 'react';

export default function InfoNavbar({
    topics,
    clickedTopic,
    handleTopic }) {
    var clickedButtonClassName = "galleryClickedButton";

    return (
        <div className="infoNavBar">

            {topics.map((topic, ID) => (
                <div key={ID}
                    className={(clickedTopic == topic ? ("infoNavItem " + clickedButtonClassName) : "infoNavItem")}
                    onClick={() => handleTopic(topic)}>
                    {topic}

                </div>
            ))}



        </div>
    );
}
