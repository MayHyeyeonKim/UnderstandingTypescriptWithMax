import { z } from "zod";
import fs from "fs";
import path from "path";

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.string()),
});

// Resolve the absolute path to the JSON file
const filePath = path.resolve(__dirname, "data.json");

const content = fs.readFileSync(filePath, "utf-8");
const jsonData = JSON.parse(content);

console.log("JSON Data:", jsonData);

type Data = z.infer<typeof dataSchema>;

const parsedData: Data = dataSchema.parse(jsonData);
console.log("Parsed Data:", parsedData);
