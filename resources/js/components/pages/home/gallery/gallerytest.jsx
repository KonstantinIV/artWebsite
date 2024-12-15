import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

const traditional = [
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5},
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5},
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/0.webp", width: 4, height: 3},
  { src: "/img/gallery/digital/all/FINAL.jpg", width: 5675 , height: 8000 },
  { src: "/img/gallery/digital/all/0.webp", width: 4, height: 3},
  { src: "/img/gallery/digital/all/tes.jpg", width: 4, height: 3},
  { src: "/img/gallery/digital/all/tes.jpg", width: 4, height: 3},


];

const digital = [
  { src: "/img/gallery/digital/all/1.jpg", width: 3.5, height: 5 },
  { src: "/img/gallery/digital/all/2.jpg", width: 3.5, height: 5},



];

export default function GalleryTest({
  clickedMediumType }) {
  return (
    <div className="galleryContainer" > {/* Fixed-width container */}
      <ColumnsPhotoAlbum
        photos={clickedMediumType === "traditional" ? traditional : digital}
        columns={3} /* Fixed 3 columns */
        spacing={15}
        /* Optional: Spacing between images */
       
      />
    </div>
  );
}
