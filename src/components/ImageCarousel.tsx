import { ComplexImageType, Image, ImageType } from "@yext/pages-components";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./Carousel";

const placeholders = [
  {
    description: "Placeholder Image",
    details: "Placeholder Image",
    image: {
      alternateText: "Placeholder Image",
      height: 800,
      url: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
      width: 1200,
    },
  },
  {
    description: "Placeholder Image",
    details: "Placeholder Image",
    image: {
      alternateText: "Placeholder Image",
      height: 800,
      url: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
      width: 1200,
    },
  },
  {
    description: "Placeholder Image",
    details: "Placeholder Image",
    image: {
      alternateText: "Placeholder Image",
      height: 800,
      url: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
      width: 1200,
    },
  },
  {
    description: "Placeholder Image",
    details: "Placeholder Image",
    image: {
      alternateText: "Placeholder Image",
      height: 800,
      url: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1",
      width: 1200,
    },
  },
];

export interface CarouselProps {
  title?: string;
  photoGallery?: ComplexImageType[] | ImageType[];
}
const ImageCarousel = ({ title, photoGallery }: CarouselProps) => {
  const images = photoGallery?.length ? photoGallery : placeholders;

  return (
    <>
      <div className="bg-gray-100 px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {images?.map((image, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex justify-center h-[187px] mb-8">
                  <Image layout="fill" image={image} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
