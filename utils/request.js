import { API_BASE_URL } from "../config";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Token 87866a159fc0ff8f8147b777c5dde53ed8c4f631",
};
export const GET = async (urlPath) => {
  return await fetch(`${API_BASE_URL}${urlPath}`, { headers, method: "GET" });
};

export const POST = async (urlPath, body) => {
  const requestOptions = { headers, body, method: "POST" };
  console.log("requestOptions", requestOptions);
  return await fetch(`${API_BASE_URL}${urlPath}`, requestOptions);
};

export const PUT = async (urlPath, body) => {
  const requestOptions = { headers, body, method: "PUT" };
  return await fetch(`${API_BASE_URL}${urlPath}`, requestOptions);
};
