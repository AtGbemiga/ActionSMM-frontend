import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const PlansBtn = (): JSX.Element => {
  return (
    <Button>
      <Link href="/plans">Plans</Link>
    </Button>
  );
};
