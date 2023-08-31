const HOST = "http://localhost:3001";

export const request = async (
  url: string,
  method: "get" | "post" | "put" | "delete" = "get",
  body?: any
) => {
  let options: RequestInit = {
    method,
    body: JSON.stringify(body), // Convert data to JSON and set as the request body
  };
  if (method === "put" || method === "post") {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  const data = await fetch(`${HOST}${url}`, options);
  return await data.json();
};
