
import React from "react";

import AboutCard from "./aboutCard";
import Gallery from "./gallery/gallery";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };


    }

    render() {

        return (

            <div>
                <AboutCard />
                <Gallery />
            </div>


        )
    }
}

