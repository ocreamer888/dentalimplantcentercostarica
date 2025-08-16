const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images');
const outputDir = path.join(__dirname, 'public/optimized-images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.tiff'];

const optimizeImage = async (filePath) => {
  const fileName = path.basename(filePath);
  const outputPath = path.join(outputDir, fileName.replace(/\.[^/.]+$/, '.webp'));

  await sharp(filePath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`Optimized ${fileName}`);
};

const optimizeImages = async () => {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();

    if (fs.statSync(filePath).isFile() && supportedFormats.includes(ext)) {
      await optimizeImage(filePath);
    }
  }
};

optimizeImages().catch(console.error);
