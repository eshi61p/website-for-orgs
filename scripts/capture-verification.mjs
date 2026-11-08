import { chromium } from 'playwright-core'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const shots = path.resolve('../verification')
fs.mkdirSync(shots, { recursive: true })

const mime = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.ttf': 'font/ttf', '.pdf': 'application/pdf', '.svg': 'image/svg+xml',
}

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  let file = path.join(dist, pathname === '/' ? 'index.html' : pathname)
  if (!file.startsWith(dist)) {
    response.writeHead(403)
    response.end()
    return
  }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(dist, 'index.html')
  response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(response)
})

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const base = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
})

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  const routes = ['', '/about', '/programs', '/help', '/news', '/gallery', '/team', '/reports', '/contacts']
  for (const route of routes) {
    await page.goto(`${base}/#${route}`, { waitUntil: 'networkidle' })
    await page.locator('main h1').first().waitFor()
    const name = route === '' ? 'home' : route.slice(1)
    await page.screenshot({ path: path.join(shots, `desktop-${name}.jpg`), type: 'jpeg', quality: 82, fullPage: true })
  }

  await page.goto(`${base}/#/`, { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Читать новость' }).first().click()
  await page.getByRole('dialog').waitFor()
  await page.screenshot({ path: path.join(shots, 'desktop-news-modal.jpg'), type: 'jpeg', quality: 82, fullPage: true })
  await page.keyboard.press('Escape')

  await page.setViewportSize({ width: 375, height: 812 })
  for (const route of ['', '/gallery', '/contacts']) {
    await page.goto(`${base}/#${route}`, { waitUntil: 'networkidle' })
    await page.locator('main h1').first().waitFor()
    const name = route === '' ? 'home' : route.slice(1)
    await page.screenshot({ path: path.join(shots, `mobile-${name}.jpg`), type: 'jpeg', quality: 82, fullPage: true })
  }

  await page.goto(`${base}/#/`, { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Открыть меню' }).click()
  await page.getByRole('navigation', { name: 'Мобильная навигация' }).waitFor()
  await page.screenshot({ path: path.join(shots, 'mobile-menu.jpg'), type: 'jpeg', quality: 82, fullPage: true })

  console.log('Восстановлено 13 JPG-снимков в', shots)
} finally {
  await browser.close()
  await new Promise((resolve) => server.close(resolve))
}
