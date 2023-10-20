import Cookies from "js-cookie";

export const logOutFunc = async (): Promise<void> => {
  const url = "http://127.0.0.1:3000/api/v1/auth/logout";

  // attempt fetch
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${Object.entries(
        res.status
      )}, ${Object.entries(exactErrorMsg)}`
    );
  }

  // Remove cookies
  Cookies.remove("token", {
    path: "/",
    secure: true,
    sameSite: "strict",
    expires: 0,
  });

  return;
};
