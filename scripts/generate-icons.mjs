/** Generate src/components/icons.tsx from docs/research/sprite.html. */
import { readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("docs/research/sprite.html", "utf8");
const defs = [...html.matchAll(/<defs>([\s\S]*?)<\/defs>/g)].map((m) => m[1]).join("\n");
const symbolRe = /<symbol[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;

const syms = new Map();
let m;
while ((m = symbolRe.exec(html))) {
  const viewBox = (m[0].match(/viewBox="([^"]+)"/) || [null, "0 0 16 16"])[1];
  syms.set(m[1], { viewBox, inner: m[2] });
}

const used = [
  "chevron-up", "chevron-down", "chevron-left", "chevron-right",
  "arrow-right", "arrow-up", "close", "check",
  "search", "account", "hamburger", "bag",
  "social-facebook", "social-instagram", "social-youtube", "social-tiktok",
  "play", "pause", "location", "info",
  "logo-full", "logo-bear", "crown", "shop-account",
  "heart-outline", "filled-heart", "plus", "minus",
  "shipping", "guarantee", "leak-proof", "question",
];

const missing = used.filter((id) => !syms.has(id));
if (missing.length) throw new Error("Missing symbols: " + missing.join(", "));

const viewBoxes = Object.fromEntries(used.map((id) => [id, syms.get(id).viewBox]));
const symbols = used
  .map((id) => `  <symbol id="${id}" viewBox="${syms.get(id).viewBox}">${syms.get(id).inner}</symbol>`)
  .join("\n");

const file = `import { cn } from "@/lib/utils";

/**
 * Auto-generated from docs/research/sprite.html — do not edit by hand.
 * Regenerate with: node scripts/generate-icons.mjs
 */

const VIEWBOXES: Record<string, string> = ${JSON.stringify(viewBoxes, null, 2)};

const SPRITE_MARKUP = \`<svg xmlns="http://www.w3.org/2000/svg">
<defs>
${defs}
</defs>
${symbols}
</svg>\`;

export type IconName = ${used.map((id) => `"${id}"`).join(" | ")};

export function SpriteSheet() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: SPRITE_MARKUP }}
    />
  );
}

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

/** Renders an icon from the embedded sprite via <use href="#name">. */
export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      className={cn("shrink-0 fill-current", className)}
      width={size}
      height={size}
      viewBox={VIEWBOXES[name]}
    >
      <use href={\`#\${name}\`} />
    </svg>
  );
}
`;

writeFileSync("src/components/icons.tsx", file);
console.log(`Generated src/components/icons.tsx with ${used.length} icons.`);
