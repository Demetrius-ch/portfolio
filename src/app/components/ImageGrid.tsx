import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/img/03_20160720S1_WEATHERBY_ANGLERS_160.jpg",
    alt: "Image 1",
    title: "Title 1",
    description: "Description for image 1.",
    fullText: "Full text for image 1...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/07_20160720S1_WEATHERBY_ANGLERS_048.jpg",
    alt: "Image 2",
    title: "Title 2",
    description: "Description for image 2.",
    fullText: "Full text for image 2...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/02_20160720S1_WEATHERBY_ANGLERS_052.jpg",
    alt: "Image 3",
    title: "Title 3",
    description: "Description for image 3.",
    fullText: "Full text for image 3...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/08_20160720S1_WEATHERBY_ANGLERS_256.jpg",
    alt: "Image 4",
    title: "Title 4",
    description: "Description for image 4.",
    fullText: "Full text for image 4...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/06_20160720S1_WEATHERBY_ANGLERS_224.jpg",
    alt: "Image 5",
    title: "Title 5",
    description: "Description for image 5.",
    fullText: "Full text for image 5...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/08_20160720S1_WEATHERBY_ANGLERS_233.jpg",
    alt: "Image 6",
    title: "Title 6",
    description: "Description for image 6.",
    fullText: "Full text for image 6...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/09_20160720S1_WEATHERBY_ANGLERS_203.jpg",
    alt: "Image 7",
    title: "Title 7",
    description: "Description for image 7.",
    fullText: "Full text for image 7...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/03_20160720S1_WEATHERBY_ANGLERS_185.jpg",
    alt: "Image 8",
    title: "Title 8",
    description: "Description for image 8.",
    fullText: "Full text for image 8...",
    width: 800,
    height: 80,
  },
  {
    src: "/img/01_20160720S1_WEATHERBY_ANGLERS_113.jpg",
    alt: "Image 9",
    title: "Title 9",
    description: "Description for image 9.",
    fullText: "Full text for image 9...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/04_20160720S1_WEATHERBY_ANGLERS_039.jpg",
    alt: "Image 10",
    title: "Title 10",
    description: "Description for image 10.",
    fullText: "Full text for image 10...",
    width: 800,
    height: 800,
  },
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            objectFit="cover"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{image.title}</h2>
            <p className="text-gray-600">{image.description}</p>
            <Link
              href={`/blog/${index}`}
              className=" mt-4 text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
