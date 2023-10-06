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

  const setSessionStorage = (data) => {
    const stringifiedData = JSON.stringify(data);
    sessionStorage.setItem("kostaImageFileNames", stringifiedData);

  };

  const getSessionStorage = () => {
    const storedData = sessionStorage.getItem("kostaImageFileNames");
    return storedData;

  };

  const setStateImageFiles = (imageFileNames) => {

    const parsedData = JSON.parse(imageFileNames);
    setImageFiles(parsedData);
  };

  const getImageFileNames = () => {

    fetch("/api/imagefiles")
    .then((response) => {
      //check for outer errors
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //check for inner errors
      if(!data.status){
          throw new Error(`Error! Status: ${data.message}`);
      }
      setImageFiles(data.data);
      setSessionStorage(data.data);

    })
    .catch((error) => {
      console.log(error);
    });
}
  
  // Fetch image file names
   
  const handleGalleryImages = () => {

    const sessionStorage = getSessionStorage();
    if (sessionStorage) {
      // If image file names exist in session storage, retrieve and update the state
     setStateImageFiles(sessionStorage);
    } else {
      // Otherwise, fetch image file names from the server
      getImageFileNames();
  };

  }
  

  useEffect(() => {
    // Fetch image file names when the component mounts
    handleGalleryImages();
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
