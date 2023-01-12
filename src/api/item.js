import { http } from "@/services/http";

export async function index(storeId, query) {
  return await http.get(`/store/${storeId}/item`, query);
}
