import { ICart } from "@/store/interfaces/ICart";
import http from "../http";

export async function getCart(): Promise<ICart> {
  const { data } = await http.get("/api/cart");
  return data;
}

export async function addProductToCart(
  productId: string,
  quantity: number
): Promise<ICart> {
  const { data } = await http.post("/api/cart", { productId, quantity });
  return data;
}

export async function setProductQuantity(productId: string, quantity: number) {
  const { data } = await http.patch("/api/cart", { productId, quantity });
  return data;
}

export async function removeProductFromCart(productId: string): Promise<ICart> {
  const { data } = await http.delete(`/api/cart/remove/${productId}`);
  return data;
}

export async function clearCart(): Promise<ICart> {
  const { data } = await http.delete("/api/cart/clear");
  return data;
}
