import * as fs from "fs";
import * as path from "path";

const ICONS_DIR = path.resolve("node_modules/primeicons/raw-svg");
const OUTPUT_PATH = path.resolve("data/icons.json");

function main() {
  console.log("🌟 Extracting PrimeIcons...");

  if (!fs.existsSync(ICONS_DIR)) {
    console.warn("⚠️ PrimeIcons raw-svg directory not found. Is it installed?");
    return;
  }

  const icons: string[] = [];
  const files = fs.readdirSync(ICONS_DIR);

  for (const file of files) {
    if (file.endsWith(".svg")) {
      // "arrow-right.svg" -> "pi-arrow-right"
      const iconName = file.replace(/\.svg$/, "");
      icons.push(`pi-${iconName}`);
    }
  }

  // Sort alphabetically for consistency
  icons.sort();

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(icons, null, 2));
  console.log(`✅ Extracted ${icons.length} PrimeIcons`);
  console.log(`📁 Output written to: ${OUTPUT_PATH}`);
}

main();
