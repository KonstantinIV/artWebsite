import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import React, { useState, useEffect } from "react";

export default function GalleryImagesV2({ imageFiles, clickedMediumType }) {
  const [photos, setPhotos] = useState([]);

  // Update photos when imageFiles changes
  useEffect(() => {
    if (Array.isArray(imageFiles) && imageFiles.length > 0) {
      // Map image files to the correct format with full path
      const formattedPhotos = imageFiles.map(({ fileName, width, height }) => ({
        src: `/img/gallery/${clickedMediumType}/${fileName}`, // Full path
        width, // Use the width from the input data
        height, // Use the height from the input data
      }));

      setPhotos(formattedPhotos); // Update state
    }
  }, [imageFiles, clickedMediumType]);


  return (
    <div className="galleryContainer">
      <ColumnsPhotoAlbum
        photos={photos}
        spacing={15}
        columns={(containerWidth) => {
          if (containerWidth < 576) return 1; // Small screens
          if (containerWidth < 992) return 2; // Medium screens
          if (containerWidth < 1280) return 3; // Larger screens
          return 3; // Default
        }}
        sizes={[
          { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
          { viewport: "(max-width: 1279px)", size: "calc(50vw - 24px)" },
          { viewport: "(min-width: 1280px)", size: "calc(33.33vw - 24px)" },
        ]}
      />
    </div>
  );
}
