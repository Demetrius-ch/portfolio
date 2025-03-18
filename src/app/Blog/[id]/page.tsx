/*import { notFound } from "next/navigation";
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

export default function BlogPage({ params }: { params: { id: string } }) {
  const image = images[parseInt(params.id)];

  if (!image) {
    return notFound();
  }

  return (
    <div className="p-6">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">{image.title}</h1>
      <p className="text-gray-600 mt-2">{image.fullText}</p>
    </div>
  );
}
*/