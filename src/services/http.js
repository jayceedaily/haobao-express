import { request } from "./request";
export const http = {
  get: async (url, data = {}, method = "GET") => {
    return await request(url, method, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  post: async (url, data, method = "POST") => {
    return await request(url, method, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  put: async (url, data, method = "PUT") => {
    return await http
      .post(url, data, method)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  patch: async (url, data, method = "PATCH") => {
    return await http
      .post(url, data, method)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  delete: async (url, method = "DELETE") => {
    return await request(url, method)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
