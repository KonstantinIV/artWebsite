import React from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({title, children}) {
    React.useEffect(() => {
        document.title = title;
    });
    return (
        <React.Fragment>
            <Header />
                <div className="bodyContainer">
                    {children}
                </div>
            <Footer />
        </React.Fragment>
    );
}

