import { Product } from "@/types";



const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export default async function getProduct(productId: string): Promise<Product> {
    const response = await fetch(`${URL}/products/${productId}`);
    return response.json();
}