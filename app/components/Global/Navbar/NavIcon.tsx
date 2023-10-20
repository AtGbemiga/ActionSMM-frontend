import Image from "next/image";
import Logo from "../../../../public/testLogo.jpg";
import Link from "next/link";
export const NavIcon = (): JSX.Element => {
  return (
    <Link href="/">
      <Image src={Logo} alt="Logo" width={50} height={50} priority />{" "}
      <span className="text-white">ActionSMM</span>
    </Link>
  );
};
