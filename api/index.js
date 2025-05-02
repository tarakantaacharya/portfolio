import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export default async function handler(req, res) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  const html = await readFile(filePath, 'utf-8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
