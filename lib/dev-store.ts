import { promises as fs } from "fs"
import path from "path"

export async function readJsonFile<T>(fileName: string, fallback: T): Promise<T> {
  const filePath = path.join(process.cwd(), "data", fileName)

  try {
    const content = await fs.readFile(filePath, "utf-8")
    return JSON.parse(content) as T
  } catch {
    return fallback
  }
}

export async function writeJsonFile<T>(fileName: string, data: T) {
  const filePath = path.join(process.cwd(), "data", fileName)

  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8")
}