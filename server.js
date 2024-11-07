const { createServer } = require("http");
const fs = require("fs");

const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Log to a file for cPanel
const logFile = fs.createWriteStream("./server.log", { flags: "a" });
const log = (message) =>
  logFile.write(`${new Date().toISOString()} - ${message}\n`);

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      log(`Error occurred handling ${req.url}: ${err}`);
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) {
      log(`Server error: ${err}`);
      throw err;
    }
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
