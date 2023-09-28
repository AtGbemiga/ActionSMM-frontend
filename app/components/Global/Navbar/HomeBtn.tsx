import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const HomeBtn = () => {
  return (
    <Button>
      <Link href="/">Home</Link>
    </Button>
  );
};
