import Image from "next/image";

const images = [
  { id: 1, src: "/g_image1.jpg", alt: "Sailery" },
  { id: 2, src: "/g_image2.jpg", alt: "Hristanne" },
  { id: 3, src: "/g_image3.jpg", alt: "Sticker Pack" },
  { id: 4, src: "/g_image4.jpg", alt: "Sticker Pack" },
  { id: 5, src: "/g_image5.jpg", alt: "Sticker Pack" },

  // Add more images as needed
];

export default function Gallery() {
  return (
    <div id="gallery" className="min-h-screen text-black  py-8 ">
      <div className="container mx-auto px-4 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                {/* <h2 className="text-xl font-semibold">{image.alt}</h2> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
