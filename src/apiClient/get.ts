
export async function getMessage(): Promise<string> {
	const data = await fetch("http://localhost:8080/api/hello");
	const jsonData = await data.json();
	return jsonData.message;
}