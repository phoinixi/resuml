import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name equivalent to __dirname in CommonJS
export const currentDir = path.dirname(fileURLToPath(import.meta.url));
