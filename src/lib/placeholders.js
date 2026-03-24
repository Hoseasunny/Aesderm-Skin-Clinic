export const makePlaceholder = (label, width = 900, height = 600) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#FAF9F6"/>
          <stop offset="100%" stop-color="#F5F0E8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <circle cx="${width * 0.2}" cy="${height * 0.2}" r="${height * 0.15}" fill="#E8D5D0" opacity="0.7"/>
      <circle cx="${width * 0.8}" cy="${height * 0.75}" r="${height * 0.2}" fill="#D4AF37" opacity="0.15"/>
      <text x="50%" y="50%" font-size="28" font-family="Inter, sans-serif" fill="#3D2817" text-anchor="middle" dominant-baseline="middle">
        ${label}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
