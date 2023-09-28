import Image from "next/image";
import Hero from "public/hero-img-placeholder.svg";
export const HeroImg = () => (
  <Image
    src={Hero}
    alt="Hero image"
    sizes="(max-width: 768px) 100vw"
    className="m-0"
    style={{ objectFit: "cover" }}
  />
);
