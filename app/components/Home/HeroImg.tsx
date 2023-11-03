import Image from "next/image";
import Hero from "public/heroimgO.svg";
export const HeroImg = () => (
  <Image
    src={Hero}
    alt="Hero image"
    sizes="100vw"
    style={{
      width: "100vw",
      height: "70vh",
      objectFit: "cover",
    }}
    className="m-0"
  />
);
