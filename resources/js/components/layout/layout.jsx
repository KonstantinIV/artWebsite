import React from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({title,urlRoute, children}) {
    /*React.useEffect(() => {
        document.title = title;
    });*/
    return (
        <React.Fragment>
            <Header urlRoute={urlRoute}/>
                <div className="bodyContainer">
                    {children}
                </div>
            <Footer />
        </React.Fragment>
    );
}

