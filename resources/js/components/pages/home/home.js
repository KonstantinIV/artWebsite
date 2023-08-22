import React from "react";

import AboutCard from "./aboutCard";
import Gallery from "./gallery/gallery";


import Layout from "../../layout/layout";



export default function Home() {


    return (

        <Layout title="Home">

            <div className='backgroundDesignBox1'>

            </div>



            <AboutCard />
            <Gallery />
        </Layout>


    )
}


