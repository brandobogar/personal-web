import images from "@/public/assets/data/images.json";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export default function Thumbnails() {
  return images.map((image, index) => {
    return (
      <SplideSlide key={index}>
        <Image
          src={image}
          alt="images"
          width={500}
          height={500}
          priority={true}
        />
      </SplideSlide>
    );
  });
}
