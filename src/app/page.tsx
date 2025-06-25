import { promises as fs } from 'fs';
import path from 'path';

export default async function Home() {
  // Resolve the path to the public/index.html file
  const filePath = path.join(process.cwd(), 'public', 'index.html');

  // Read the file content
  const fileContent = await fs.readFile(filePath, 'utf-8');

  // Return the HTML content
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </main>
  );
}
