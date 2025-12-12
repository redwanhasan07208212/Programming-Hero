import type { ServerResponse } from "http";

export const sendResponse = (
  res: ServerResponse,
  statusCode: number,
  success: boolean,
  data?: string | object,
  message?: string
) => {
  const response = {
    success: success,
    message: message,
    data: data || null,
  };
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(response));
};
