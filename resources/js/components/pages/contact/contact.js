import React from 'react';

import ContactInfo from './contactInfo';
import ContactForm from './contactForm';

import Layout from "../../layout/layout";

export default function Contact() {


    return (




        <Layout title="Contact - Kosta | Art">
            <div className='contactContainer'>
                <ContactInfo />
                <ContactForm />
            </div>
        </Layout>

    )
}
