import React from "react";
import  { useEffect, useState } from "react";




import GalleryNavigation from "./galleryNavigation";
import GalleryImages from "./galleryImages";
import GalleryBackgroundCSS from "./galleryBackgroundCSS";

function Gallery(){
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



      const viewTypes = ["small", "large"];
      const artMediums = ["digital", "traditional"];
      const artTypes = {
        digital: ["all", "paintings", "drawings"],
        traditional: ["all", "paintings", "drawings"]
      };

      
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

  
  useEffect(() => {
    const storedData = sessionStorage.getItem('kostaImageFileNames');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setImageFiles(parsedData);
    } else {
      fetch('/api/imagefiles')
        .then((response) => response.json())
        .then((data) => {
          setImageFiles(data);

          const stringifiedData = JSON.stringify(data);
          sessionStorage.setItem('kostaImageFileNames', stringifiedData);
        });
    }
  }, []);



return(

    <div class="galleryNavAndGalleryContainer">
    <h1 class="galleryHeader">
        Gallery
    </h1>

    <GalleryBackgroundCSS/>
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


)
  


}



    export default Gallery;