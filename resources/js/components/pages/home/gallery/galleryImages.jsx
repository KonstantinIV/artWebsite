import React from 'react';

function GalleryImages({
  handleEnlargeImage,
  imageFiles,
  clickedMediumType,
  clickedArtType,
  clickedViewType,
  isImageClicked,
  imageFileName }) {


   const classes2 = 
   `${clickedViewType === "small" ? "galleryImageContainerSmallView" : "galleryImageContainerLargeView"} 
   
   `;

  

  return (
    <div className="galleryContainer">
      <div 
      className={clickedViewType === "small" ? "gallerySmallView" : "galleryLargeView"}>
        {/* Map over the image files and render each image */}
        {imageFiles[clickedMediumType][clickedArtType] &&
          imageFiles[clickedMediumType][clickedArtType].map((file) => (
            <div className={classes2}
             key={file}>


              <img
                onClick={() => handleEnlargeImage(file)}
                src={`img/gallery/${clickedMediumType}/${clickedArtType}/${file}`}
                className={clickedViewType === "small" ? "galleryImageSmall" : "galleryImageLarge"}
                alt="..."
                loading="lazy"
                width="300" height="300" 
              />
            </div>
          ))}

        {/* Render enlarged image if it is clicked */}
        {isImageClicked && (
          <div className="galleryEnlargeImageContainer" onClick={() => handleEnlargeImage("")}>
            {/* Close button for enlarged image */}
            <img className="galleryEnlargeImageCloseButton" onClick={() => handleEnlargeImage("")} src="img/icons/closeButton.png" alt="..." />

            {/* Enlarged image */}
            <img
              className="galleryEnlargeImage"
              onClick={() => handleEnlargeImage("")}
              src={`img/gallery/${clickedMediumType}/${clickedArtType}/${imageFileName}`}
              alt="..."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryImages;
