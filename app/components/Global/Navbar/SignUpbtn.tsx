import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const SignUpBtn = () => {
  return (
    <Button>
      <Link href="/sign-up">Sign up</Link>
    </Button>
  );
};
