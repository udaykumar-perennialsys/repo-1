import axios from "axios";
import { ProductResponse, RequestBodyProduct } from "./interface";

export const productApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAllProduct() {
  const response = await productApi.get("/products");
  return response.data;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getproductByCategory(category: string) {
  const response = await productApi.get(`products/category/${category}`);
  return response.data;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getSingleProduct(id: number) {
  const response = await productApi.get(`/products/${id}`);
  return response.data;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export async function getAllCategory() {
//   const response = await productApi.get("products/categories");
//   return response.data;
// }

export async function addNewProduct(
  product: RequestBodyProduct
): Promise<ProductResponse | undefined> {
  const response = await productApi.post("products", {
    product,
  });
  return response.data as ProductResponse;
}
