export const payStackFunc = async (
  email: string,
  amount: string,
  name: string
) => {
  let url;

  switch (name) {
    case "Starter":
      url = `http://127.0.0.1:3000/api/v1/paystack/starter?amount=${amount}&email=${email}`;
      break;
    case "Pro":
      url = `http://127.0.0.1:3000/api/v1/paystack/pro?amount=${amount}&email=${email}`;
      break;
    case "Supreme":
      url = `http://127.0.0.1:3000/api/v1/paystack/supreme?amount=${amount}&email=${email}`;
      break;
    case "Starter%20Plus":
      url = `http://127.0.0.1:3000/api/v1/paystack/starterPlus?amount=${amount}&email=${email}`;
      break;
    case "Pro%20Plus":
      url = `http://127.0.0.1:3000/api/v1/paystack/proPlus?amount=${amount}&email=${email}`;
      break;
    case "Supreme%20Plus":
      url = `http://127.0.0.1:3000/api/v1/paystack/supremePlus?amount=${amount}&email=${email}`;
      break;

    default:
      break;
  }

  if (!url) return;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg}`
    );
  }

  const data = await res.json();

  console.log("function", data);

  return data;
};
