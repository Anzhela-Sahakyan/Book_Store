const HOST = "http://localhost:3001";

export const request = async (
  url: string,
  method: "get" | "post" | "patch" | "delete" = "get",
  body?: any
) => {
  const data = await fetch(`${HOST}${url}`, { method, body });
  return await data.json();
};
