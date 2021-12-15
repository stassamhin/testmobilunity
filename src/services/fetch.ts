
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const makeRequest = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(input, init);
    const payload = await response.json().catch(() => response.body);

    if (response.ok) {
      return payload as T;
    }

    throw new Error(payload?.error || response.statusText);
  } catch (error) {
    throw error;
  }
};

const request = async <T>(url: string, method = "GET", body?: unknown): Promise<T> =>
  makeRequest<T>(BASE_URL + url, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method,
  });


export const post = <T>(url: string, body?: unknown) => request<T>(url, "POST", body);

export const put = <T>(url: string, body?: unknown) => request<T>(url, "PUT", body);

export const get = <T>(url: string) => request<T>(url, "GET");

export const del = <T>(url: string, body?: unknown) => request<T>(url, "DELETE", body);
