
/**
 * Converts an SVG element to a PNG image and triggers a download.
 * @param svgElement The SVG element to export.
 * @param fileName The name of the file to download.
 * @param scale A multiplier to increase the output resolution (e.g., for print quality).
 */
export const exportSvgToPng = (
  svgElement: SVGSVGElement,
  fileName: string,
  scale: number = 1
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const { width, height } = svgElement.getBBox();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return reject(new Error('Could not get canvas context'));
    }

    const scaledWidth = width * scale;
    const scaledHeight = height * scale;

    canvas.width = scaledWidth;
    canvas.height = scaledHeight;

    const svgXml = new XMLSerializer().serializeToString(svgElement);
    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgXml)}`;

    const img = new Image();
    img.src = svgBase64;

    img.onload = () => {
      ctx.clearRect(0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      const pngUrl = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      resolve();
    };

    img.onerror = (error) => {
      reject(new Error(`Image loading failed: ${error}`));
    };
  });
};
