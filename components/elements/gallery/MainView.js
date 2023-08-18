import images from "@/public/assets/data/images.json";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export default function MainView() {
  return images.map((image, index) => {
    return (
      <SplideSlide
        key={index}
        className="flex items-center justify-center w-full  "
      >
        <Image
          src={image}
          alt="images"
          width={700}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          className="object-contain rounded-xl phone:hidden"
          priority={true}
        />
        <Image
          src={image}
          alt="images"
          width={300}
          height={300}
          className="object-contain rounded-xl tablet:hidden laptop:hidden"
          priority={true}
        />
      </SplideSlide>
    );
  });
}
