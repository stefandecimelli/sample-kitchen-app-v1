import { Item } from "../types/Item";
import { host } from "./config.json"

export async function getAllItems(): Promise<Item[]> {
	const data = await fetch(`${host}/api/items`);
	return await data.json();
}