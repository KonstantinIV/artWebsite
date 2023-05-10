import React from 'react';



function GalleryNavigation(props) {

    var clickedButtonClassName = "galleryClickedButton";

    return (
        <div class="galleryNavContainer">

            <GalleryNavigationTabArtMedium
                handleSetArtMedium={props.handleSetArtMedium}
                artMediums={props.artMediums}
                clickedButtonClassName={clickedButtonClassName}
                clickedMediumType = {props.clickedMediumType}

            />

            {(props.artMediumClicked == "digital" ?
                <GalleryNavigationTabArtType
                handleSetArtType={props.handleSetArtType}
                    artTypes={props.artTypes}
                    clickedButtonClassName={clickedButtonClassName}
                    clickedArtType = {props.clickedArtType}

                />

                :
                <GalleryNavigationTabArtType
                handleSetArtType={props.handleSetArtType}
                    artTypes={props.artTypes}
                    clickedButtonClassName={clickedButtonClassName}
                    clickedArtType = {props.clickedArtType}

                />

            )}

            <GalleryNavigationTabViewType
                handleSetViewType={props.handleSetViewType}
                viewTypes={props.viewTypes}
                clickedButtonClassName={clickedButtonClassName}
                clickedViewType = {props.clickedViewType}

            />

        </div>
    );
}


function GalleryNavigationTabArtMedium(props) {
    return (
        <div class="galleryNavContainerArtMediumType">

            {props.artMediums.map((buttonName, ID) => (
                <div key={ID}
                    class={(props.clickedMediumType == buttonName ? ("galleryNavItem " + props.clickedButtonClassName) : "galleryNavItem")}
                    onClick={() => props.handleSetArtMedium(buttonName)}>
                    {buttonName}

                </div>
            ))}



        </div>
    );
}

function GalleryNavigationTabArtType(props) {

    return (

        <div class="galleryNavContainerArtTypeTab">

            {props.artTypes.map((buttonName, ID) => (
                <div key={ID}
                    class={(props.clickedArtType == buttonName ? ("galleryNavItem " + props.clickedButtonClassName) : "galleryNavItem")}
                    onClick={() => props.handleSetArtType(buttonName)}>
                    {buttonName}
                </div>
            ))}

        </div>
    );
}

function GalleryNavigationTabViewType(props) {
    return (
        <div class="galleryNavContainerArtViewType">

            {props.viewTypes.map((buttonName, ID) => (

                <div key={ID}
                    class={(props.clickedViewType == buttonName ? ("galleryNavItem " + props.clickedButtonClassName) : "galleryNavItem")}
                    onClick={() => props.handleSetViewType(buttonName)}>
                    {buttonName == "small" ? (
                        <div className="gallerySmallViewIcon">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    ) :
                        (<div className="galleryLargeViewIcon">
                            <div></div>
                        </div>)

                    }

                </div>
            ))}



        </div>
    );
}


export default GalleryNavigation;
