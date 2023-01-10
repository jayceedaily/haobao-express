import axios from "axios";

export function request(url, method, data = {}) {
  return axios({
    url: import.meta.env.VITE_API_URL + url,
    method: method,
    data: data,
    params: method == "GET" ? data : {},
  });
}
