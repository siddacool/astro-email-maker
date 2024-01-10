// @ts-check
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import prettier from 'prettier';

const emailFileExtension = process.env.EMAIL_FILE_EXTENSION;
const compressHTML = process.env.COMPRESS_HTML === 'TRUE' ? true : false;

const disPath = 'dist'; // Change this to your actual directory path

/**
 * Modify Html Files
 *
 * @param {string} location - The path to the directory containing the files.
 * @returns {Promise<void>} A Promise that resolves when the renaming is complete.
 */
async function modifyHtmlFiles(location) {
  try {
    // Read the contents of the specified directory
    const files = await fs.readdir(location);

    // Iterate through the files
    for (const file of files) {
      if (file.endsWith('.html')) {
        const filepath = path.join(location, file);

        // Read the HTML file asynchronously
        let data = await fs.readFile(filepath, 'utf-8');

        data = data
          .replace(/&#x27;/g, `'`)
          .replace(/&quot;/g, `"`)
          .replace(/&lt;/g, `<`)
          .replace(/&gt;/g, `>`);

        if (!compressHTML) {
          data = await prettier.format(data, {
            parser: 'html',
          });
        }

        await fs.writeFile(filepath, data, 'utf-8');
      }
    }

    console.log('[Post Processing]: Fixing text symbols');

    if (!compressHTML) {
      console.log('[Post Processing]: Beautify HTML');
    }

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

/**
 * Asynchronously renames HTML files to EJS files within a specified location.
 *
 * @param {string} location - The path to the directory containing the files.
 * @param {string} fileExtension - The path to the directory containing the files.
 * @returns {Promise<void>} A Promise that resolves when the renaming is complete.
 */
async function renameFiles(location, fileExtension) {
  try {
    // Read the contents of the specified directory
    const files = await fs.readdir(location);

    // Iterate through the files
    for (const file of files) {
      if (file.endsWith('.html')) {
        // Construct the old and new file paths
        const oldPath = path.join(location, file);
        const newPath = path.join(location, file.replace(/\.html$/, `.${fileExtension}`));

        // Rename the file
        await fs.rename(oldPath, newPath);
      }
    }

    console.log(`[Post Processing]: Rename .html to .${fileExtension}`);

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

/**
 * Asynchronously renames HTML files to EJS files within a specified location.
 *
 * @param {string} location - The path to the directory containing the files.
 * @returns {Promise<void>} A Promise that resolves when the renaming is complete.
 */
async function cleanupUnsuedFiles(location) {
  try {
    // Read the contents of the specified directory
    const files = await fs.readdir(location);

    // Delete 'index.html' if it exists
    const indexPath = path.join(location, 'index.html');
    if (files.includes('index.html')) {
      await fs.unlink(indexPath);
    }

    console.log('[Post Processing]: Cleanup Unsued Files');

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

async function main() {
  try {
    await cleanupUnsuedFiles(disPath);

    await modifyHtmlFiles(disPath);

    if (emailFileExtension && emailFileExtension !== 'html') {
      await renameFiles(disPath, emailFileExtension);
    }
  } catch (e) {
    console.error('Error:', e);
  }
}

main();
