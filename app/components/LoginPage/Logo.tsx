import Image from "next/image";
import LogoImg from "../../../public/testLogo.jpg";
export const Logo = (): JSX.Element => {
  return (
    <section className="text-center py-2">
      <Image src={LogoImg} alt="Logo" width={100} height={100} />
      <p className="pt-4">Affordable and powerful social media management.</p>
    </section>
  );
};
