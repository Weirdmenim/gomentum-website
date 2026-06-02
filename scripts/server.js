const http = require('http');
const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const requested = clean === '/' ? '/index.html' : clean;
  const direct = path.join(dist, requested);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  const index = path.join(dist, requested, 'index.html');
  if (fs.existsSync(index)) return index;
  return path.join(dist, 'index.html');
}
http.createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  const ext = path.extname(file);
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Gomentum site running at http://localhost:${port}`));
