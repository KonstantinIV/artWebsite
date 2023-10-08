import React from "react";

import Design from "./design/design";
import WebsiteLogo from "./logo/websiteLogo";
import NavigationBar from "./navigationBar/navigationBar";

export default function Header({urlRoute}) {

    return (
        <div>
            <Design />

            <WebsiteLogo />
            <NavigationBar urlRoute={urlRoute}/>
        </div>
    );
}

