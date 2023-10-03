import { SignUp } from "@/app/typesAndInterfaces/signUp";
import Cookies from "js-cookie";

export const signUp = async ({ email, password }: SignUp) => {
  const url = "http://localhost:3000/api/v1/auth/register";

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
  console.log(email, password);

  // get good res at this stage
  const data = await res.json();

  // set cookies
  Cookies.set("token", data.token, {
    expires: 7,
    path: "/",
    secure: true,
    sameSite: "strict",
  });

  console.log(data);

  return data;
};
