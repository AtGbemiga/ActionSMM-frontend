import { Auth, AuthRes } from "@/app/typesAndInterfaces/auth";
import Cookies from "js-cookie";

export const authFunc = async (
  { email, password }: Auth,
  identifier: string
): Promise<AuthRes> => {
  let url;

  // identifier is either login or signup
  identifier === "login"
    ? (url = "http://127.0.0.1:3000/api/v1/auth/login")
    : (url = "http://127.0.0.1:3000/api/v1/auth/register");

  // attempt fetch
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg}`
    );
  }

  // get good res at this stage
  const data: AuthRes = await res.json();

  // set cookies
  Cookies.set("token", data.token, {
    expires: 60,
    path: "/",
    secure: true,
    sameSite: "strict",
  });

  return data;
};
