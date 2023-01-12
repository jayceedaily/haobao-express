import { http } from "@/services/http";

export async function index(query) {
  return await http.get("/store", query);
}
