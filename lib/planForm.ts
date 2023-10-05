import Cookies from "js-cookie";

export const planFormFunc = async (formDataBody: FormData) => {
  const url = "http://127.0.0.1:3000/api/v1/plan/details";

  const token = Cookies.get("token");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      //   "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: formDataBody,
  });

  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg}`
    );
  }

  console.log(formDataBody);

  const data = await res.json();

  return data;
};
