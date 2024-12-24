import React from 'react';

import Layout from "../../layout/layout";

import ContactInfo from './contactInfo';
import ContactForm from './contactForm';


export default function Contact(props) {

    return (




        <Layout title="Contact - Rosenhart | Art" urlRoute={props.urlRoute}>
            <div className='contactContainer'>
                <ContactInfo />
                <ContactForm
                    siteKey={props.siteKey}
                />
            </div>
        </Layout>

    )
}
