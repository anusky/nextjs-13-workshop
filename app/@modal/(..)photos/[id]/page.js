
import swagPhotos from "../../../../photos";
import Modal from "../../../components/modal";
import Photo from "../../../components/Photo";

export default function PhotoModal({ params: { id: photoId } }) {
  const photos = swagPhotos;
  const photo = photoId && photos.find((p) => p.id === photoId);

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}
