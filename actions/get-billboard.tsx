import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export default async function getBillboard(billboardId: string): Promise<Billboard>  {
    const response = await fetch(`${URL}/billboards/${billboardId}`);
    return response.json();
}