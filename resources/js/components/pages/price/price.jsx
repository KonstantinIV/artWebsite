import React from 'react';

import PriceNavbar from './priceNavbar';
import PriceTrad from './priceTrad';
import PriceDigital from './priceDigital';

import Layout from "../../layout/layout";


export default function Price() {

    return (



        <Layout title="Price - Kosta | Art">
            <div>
                <PriceNavbar />
                <PriceTrad />
                <PriceDigital />


            </div>
        </Layout>


    )
}
