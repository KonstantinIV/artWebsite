import React from 'react';

import ContactInfo from './contactInfo';
import ContactForm from './contactForm';

import Layout from "../../layout/layout";

export default function Contact(props) {

    return (




        <Layout title="Contact - Kosta | Art">
            <div className='contactContainer'>
                <ContactInfo />
                <ContactForm 
                siteKey = {props.siteKey}
                />
            </div>
        </Layout>

    )
}
