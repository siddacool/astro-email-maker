// @ts-check
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

const emailFileExtension = process.env.EMAIL_FILE_EXTENSION;

const disPath = 'dist'; // Change this to your actual directory path

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

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

async function main() {
  try {
    await cleanupUnsuedFiles(disPath);

    if (emailFileExtension && emailFileExtension !== 'html') {
      await renameFiles(disPath, emailFileExtension);
    }
  } catch (e) {
    console.error('Error:', e);
  }
}

main();
