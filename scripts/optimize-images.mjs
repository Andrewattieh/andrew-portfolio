import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "node:fs";

const src = "public/mypic.png";
const out = "public/mypic.webp";

const before = statSync(src).size;
const meta = await sharp(src).metadata();

// Displayed at ~58% of a 384px scene (~223px); cap at 480px for retina (2x).
await sharp(src)
  .resize({ width: Math.min(meta.width, 480), withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(out);

const after = statSync(out).size;
console.log(
  `mypic: ${meta.width}x${meta.height} PNG ${(before / 1024).toFixed(
    0
  )}KB -> WebP ${(after / 1024).toFixed(0)}KB (${(
    (1 - after / before) *
    100
  ).toFixed(0)}% smaller)`
);

// Emit the rendered dimensions so we can set width/height on the <img>.
const w = Math.min(meta.width, 480);
const h = Math.round((meta.height / meta.width) * w);
console.log(`render-size: ${w}x${h}`);
