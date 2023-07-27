import fsPromises from "fs/promises";
import path from "path";

export default async function handler(req, res) {
	//Find the absolute path of the json directory

	console.log("hello backend");

	const jsonDirectory = path.join(process.cwd(), "src/app/_json/data.json");

	const fileContents = await fsPromises.readFile(jsonDirectory);

	console.log(fileContents);
	//Return the content of the data file in json format
	res.status(200).json(fileContents);
}
