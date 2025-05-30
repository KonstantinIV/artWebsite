import React from "react";

import Layout from "../../layout/layout";

import AboutCard from "./aboutCard/aboutCard";
import Gallery from "./gallery/gallery";






export default function Home(props) {

    return (
        <Layout title="Rosenhart | Art" urlRoute={props.urlRoute} >

            <div className='backgroundDesignBox1'></div>

            <AboutCard
                artistDescription={props.artistDescription}
            />
            <Gallery />
        </Layout>


    )
}


