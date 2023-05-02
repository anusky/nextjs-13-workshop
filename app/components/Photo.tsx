import Image from "next/image";

export default function Photo({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
      </div>
    </>
  );
}
