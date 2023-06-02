import React from "react";
import { useEffect, useState } from "react";
import GalleryNavigation from "./galleryNavigation";
import GalleryImages from "./galleryImages";
import GalleryBackgroundCSS from "./galleryBackgroundCSS";

function Gallery() {
  // State variables
  const [imageFiles, setImageFiles] = useState({
    digital: {
      all: [],
      paintings: [],
      drawings: []
    },
    traditional: {
      all: [],
      paintings: [],
      drawings: []
    }
  });
  const [clickedMediumType, setClickedMediumType] = useState("digital");
  const [clickedArtType, setClickedArtType] = useState("all");
  const [clickedViewType, setClickedViewType] = useState("small");
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [imageFileName, setImageFileName] = useState("");

  // Other constants
  const viewTypes = ["small", "large"];
  const artMediums = ["digital", "traditional"];
  const artTypes = {
    digital: ["all", "paintings", "drawings"],
    traditional: ["all", "paintings", "drawings"]
  };

  // Event handlers
  const handleSetArtMedium = (mediumType) => {
    setClickedMediumType(mediumType);
  };

  const handleSetArtType = (artType) => {
    setClickedArtType(artType);
  };

  const handleSetViewType = (viewType) => {
    setClickedViewType(viewType);
  };

  const handleEnlargeImage = (fileName) => {
    setIsImageClicked(!isImageClicked);
    setImageFileName(fileName);
  };

  // Fetch image file names
  const getImageFileNames = () => {
    const storedData = sessionStorage.getItem("kostaImageFileNames");

    if (storedData) {
      // If image file names exist in session storage, retrieve and update the state
      const parsedData = JSON.parse(storedData);
      setImageFiles(parsedData);
    } else {
      // Otherwise, fetch image file names from the server
      fetch("/api/imagefiles")
        .then((response) => response.json())
        .then((data) => {
          setImageFiles(data);

          // Store the fetched image file names in session storage for future use
          const stringifiedData = JSON.stringify(data);
          sessionStorage.setItem("kostaImageFileNames", stringifiedData);
        });
    }
  };

  useEffect(() => {
    // Fetch image file names when the component mounts
    getImageFileNames();
  }, []);

  // JSX content
  return (
    <div className="galleryNavAndGalleryContainer">
      <h1 className="galleryHeader">Gallery</h1>

      {/* Component for gallery background CSS */}
      <GalleryBackgroundCSS />

      {/* Component for gallery navigation */}
      <GalleryNavigation
        handleSetArtMedium={handleSetArtMedium}
        handleSetArtType={handleSetArtType}
        handleSetViewType={handleSetViewType}
        artMediums={artMediums}
        artTypes={artTypes[clickedMediumType]}
        viewTypes={viewTypes}
        clickedMediumType={clickedMediumType}
        clickedArtType={clickedArtType}
        clickedViewType={clickedViewType}
        isImageClicked={isImageClicked}
      />

      {/* Component for gallery images */}
      <GalleryImages
        handleEnlargeImage={handleEnlargeImage}
        imageFiles={imageFiles}
        clickedMediumType={clickedMediumType}
        clickedArtType={clickedArtType}
        clickedViewType={clickedViewType}
        isImageClicked={isImageClicked}
        imageFileName={imageFileName}
      />
    </div>
  );
}

export default Gallery;
