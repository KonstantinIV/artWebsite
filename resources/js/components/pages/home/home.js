import React from "react";

import AboutCard from "./aboutCard";
import Gallery from "./gallery/gallery";


import Layout from "../../layout/layout";

//import { usePage } from '@inertiajs/react';

export default function Home(props) {

   // const { artistDescription } = usePage().props;
    return (

        <Layout title="Home">

            <div className='backgroundDesignBox1'>

            </div>



            <AboutCard 
                artistDescription={props.artistDescription}
            />
            <Gallery />
        </Layout>


    )
}


