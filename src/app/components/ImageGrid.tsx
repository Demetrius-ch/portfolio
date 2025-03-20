import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/img/03_20160720S1_WEATHERBY_ANGLERS_160.jpg",
    alt: "Image 1",
    title: "7/24/19",
    description:
      "Casting for Redfin",
    fullText: "When I asked today’s guests what they were looking to catch, they had an immediate answer: Redfin.",
    width: 800,
    height: 800,
  },
  {
    src: "/img/07_20160720S1_WEATHERBY_ANGLERS_048.jpg",
    alt: "",
    title: "7/22/19",
    description:
      "Fishing the Space Coast",
    fullText: "Today, we dropped anchor off Cocoa Beach to enjoy some great fishing and a history lesson about Florida’s incredible Space Coescription for image 2.",
    width: 800,
    height: 800,
  },
  {
    src: "/img/02_20160720S1_WEATHERBY_ANGLERS_052.jpg",
    alt: "Image 3",
    title: "7/19/19",
    description:
      "The Captain's Hat ",
    fullText: "Being the captain of a fishing charter is my dream job, but that doesn’t mean it’s always easy.",
    width: 800,
    height: 800,
  },
  {
    src: "/img/04_20160720S1_WEATHERBY_ANGLERS_264.jpg",
    alt: "Image 4",
    title: "7/16/19",
    description:
      "The Art of Lures",
    fullText: "I’ve never been much of a fly fisherman, but that doesn’t mean I can’t appreciate the work of art that is a well tied lure.", 
    width: 800,
    height: 800,
  },
  {
    src: "/img/08_20160720S1_WEATHERBY_ANGLERS_256.jpg",
    alt: "Image 4",
    title: "7/16/19",
    description:
      "",
    fullText: "I’ve never been much of a fly fisherman, but that doesn’t mean I can’t appreciate the work of art that is a well tied lure. ",
    width: 800,
    height: 800,
  },
  {
    src: "/img/06_20160720S1_WEATHERBY_ANGLERS_224.jpg",
    alt: "Image 5",
    title: "6/14/19",
    description:
     "We charter captains like to think of ourselves as a different breed, with a whole vocabulary of our own.",
    fullText: "Full text for image 5...",
    width: 800,
    height: 800,
  },
  {
    src: "/img/04_20160720S1_WEATHERBY_ANGLERS_287.jpg",
    alt: "Image 6",
    title: "6/11/19",
    description: 
    "Snook is always a fun fish to go after and we spent the day visiting a few of the locations it likes best.",
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
    <div className="container mx-auto px-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-start transition duration-300 hover:scale-105"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              objectFit="cover"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl text-black text-center mb-2">
                {image.title}
              </h2>
              <p className="text-black font-bold text-center">
                {image.description}
              </p>
              <p className="text-black text-center">
                {image.fullText}
              </p>
              <Link
                href={`/blog/${index}`}
                className=" mt-2 inline-block text-center text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
