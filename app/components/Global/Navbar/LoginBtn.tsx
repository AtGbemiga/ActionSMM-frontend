import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const LoginBtn = () => {
  return (
    <Button>
      <Link href="/login">Login</Link>
    </Button>
  );
};