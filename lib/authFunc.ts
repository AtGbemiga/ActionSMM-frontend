import { Auth, AuthRes } from "@/app/typesAndInterfaces/auth";
import Cookies from "js-cookie";

export const authFunc = async (
  { email, password }: Auth,
  identifier: string
): Promise<AuthRes> => {
  let url;

  // identifier is either login, signup or reset password
  if (identifier === "login") {
    url = "http://127.0.0.1:3000/api/v1/auth/login";
  } else if (identifier === "signup") {
    url =
      "https://actionsmm-backend-production.up.railway.app/api/v1/auth/register";
  } else if (identifier === "resetPassword") {
    url =
      "https://actionsmm-backend-production.up.railway.app/api/v1/auth/reset-password";
  } else {
    throw new Error("Invalid identifier");
  }

  console.log("email", email || undefined, "password", password);

  // attempt fetch
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({ email, password }),
  });

  console.log("res", res);

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${Object.entries(
        res.status
      )}, ${Object.entries(exactErrorMsg)}`
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
