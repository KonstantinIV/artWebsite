import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

const traditional = [
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/0.webp", width: 4, height: 3 },
  { src: "/img/gallery/digital/all/FINAL.jpg", width: 5675, height: 8000 },
  { src: "/img/gallery/digital/all/0.webp", width: 4, height: 3 },
  { src: "/img/gallery/digital/all/tes.jpg", width: 4, height: 3 },
  { src: "/img/gallery/digital/all/tes.jpg", width: 4, height: 3 },
];

const digital = [
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5 },
];

export default function GalleryTest({ clickedMediumType }) {
  return (
    <div className="galleryContainer">
      {/* Gallery Container */}
      <ColumnsPhotoAlbum
        photos={clickedMediumType === "traditional" ? traditional : digital}
        spacing={15}
        columns={(containerWidth) => {
          if (containerWidth < 576) return 1;
          if (containerWidth < 992) return 2; // 1 column for small screens
          if (containerWidth < 1280) return 3; // 2 columns for medium screens
          return 3; // 3 columns for large screens
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
