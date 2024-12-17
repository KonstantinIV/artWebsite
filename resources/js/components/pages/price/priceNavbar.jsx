import React from 'react';

export default function PriceNavbar() {
    var clickedButtonClassName = "galleryClickedButton";

    return (
        <div className="galleryNavContainerArtMediumType">

            {["Digital", "Traditional"].map((buttonName, ID) => (
                <div key={ID}
                    className={("Digital" == buttonName ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")}
                    onClick={() => props.handleSetArtMedium(buttonName)}>
                    {buttonName}

                </div>
            ))}
        </div>
    );
}
