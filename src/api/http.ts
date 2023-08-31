const HOST = "http://localhost:3001";

export const request = async (
  url: string,
  method: "get" | "post" | "put" | "delete" = "get",
  body?: any
) => {
  let options: RequestInit = {
    method,
    body: JSON.stringify(body),
  };
  if (method === "put" || method === "post") {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  const res = await fetch(`${HOST}${url}`, options);
  return res.json();
};
