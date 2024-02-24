const puppeteer = require("puppeteer")
const { exec } = require("node:child_process")
const { promisify } = require("node:util")

async function main() {
  // find path to chromium
  const { stdout: chromiumPath } = await promisify(exec)("which chromium")

  const browser = await puppeteer.launch({
    headless: false,
    executablePath: chromiumPath.trim()
  });

  const page = await browser.newPage()

  // go to github front page
  await page.goto("https://perchance.org/ai-text-to-image-generator")
}
main()