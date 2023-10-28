import React from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({title,urlRoute, children}) {
    //Deleted so it would not override the one set in backend
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

