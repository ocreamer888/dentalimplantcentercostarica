interface CompressionOptions {
  maxWidth: number;
  maxHeight: number;
  quality: number;
  maxSize: number;
}

export async function compressImage(
  file: File, 
  options: CompressionOptions
): Promise<File> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      const { maxWidth, maxHeight } = options;
      
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Check if compressed size is still too large
            if (blob.size > options.maxSize) {
              // Try with lower quality
              canvas.toBlob(
                (finalBlob) => {
                  if (finalBlob) {
                    const compressedFile = new File([finalBlob], file.name, {
                      type: file.type,
                      lastModified: Date.now(),
                    });
                    resolve(compressedFile);
                  } else {
                    reject(new Error('Compression failed'));
                  }
                },
                file.type,
                0.6 // Lower quality
              );
            } else {
              const compressedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            }
          } else {
            reject(new Error('Compression failed'));
          }
        },
        file.type,
        options.quality
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}
