import React from 'react';

function GalleryImages(props){


    

    return (
    <div class="galleryContainer">
    <div class={(props.clickedViewType == "small" ? "gallerySmallView" : "galleryLargeView")}>
        {
            props.imageFiles[props.clickedMediumType][props.clickedArtType] &&
            props.imageFiles[props.clickedMediumType][props.clickedArtType]
                .map((file, index) => (



                    <div class={(props.clickedViewType == "small" ? "galleryImageContainerSmallView" : "galleryImageContainerLargeView")}>

                        <img
                            key={index}
                            onClick={() => props.handleEnlargeImage(file)}
                            src={"img/gallery/" + props.clickedMediumType + "/" + props.clickedArtType + "/" + file}
                            class={(props.clickedViewType == "small" ? " galleryImageSmall" : " galleryImageLarge")}
                            alt="..." />

                    </div>
                ))
        }

        {//On click enlarge specidfic image
            (props.isImageClicked ?
                <div class="galleryEnlargeImageContainer"
                    onClick={() => props.handleEnlargeImage("")}
                >

                    <img className="galleryEnlargeImageCloseButton"
                        onClick={() => props.handleEnlargeImage("")}
                        src={"img/closeButton.png"}
                        alt="..." />

                    <img className="galleryEnlargeImage"
                        onClick={() => props.handleEnlargeImage("")}
                        src={"img/gallery/" + props.clickedMediumType + "/" + props.clickedArtType + "/" + props.imageFileName}
                        alt="..." />
                </div>
                : ""
            )
        }



    </div>
</div>
    )
}
export default GalleryImages;