import React from 'react';
import { Link } from '@inertiajs/react';


export default function InfoNavbar({
    topicContentMap,
    clickedTopic,
     }) {
    var clickedButtonClassName = "infoNavClickedButton";

    return (
        <aside className="infoNavBar">
            {Object.keys(topicContentMap).map((topic, ID) => (
                <Link preserveScroll key={ID}
                    className={(clickedTopic == topic ? ("infoNavItem " + clickedButtonClassName) : "infoNavItem")}
                    href={'/info/'+topicContentMap[topic]}>
                    {topic}
                </Link>
            ))}
        </aside>
    );
}
