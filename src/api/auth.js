import { http } from "@/services/http";

export async function login(payload) {
  return await http.post(`/login`, payload);
}
