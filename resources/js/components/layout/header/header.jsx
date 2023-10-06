import React from "react";

import Design from "./design/design";
import WebsiteLogo from "./logo/websiteLogo";
import NavigationBar from "./navigationBar/navigationBar";

export default function Header() {

    return (
        <div>
            <Design />

            <WebsiteLogo />
            <NavigationBar />
        </div>
    );
}

