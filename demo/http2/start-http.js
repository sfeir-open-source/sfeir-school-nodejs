const https = require("https");
const port = 3001;
const fs = require("fs");
const helper = require("./helper");
const htmlContent = fs.readFileSync("index.html", "utf8");

const assets = helper.getFiles("assets");

const options = {
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
};

const server = https.createServer(options, function (req, res) {
  console.log(req.url);
  if (req.url === "/") {
    res.end(htmlContent);
  } else {
    const asset = assets.get(req.url);
    if (!asset) {
      res.statusCode = 404;
      res.end();
    } else {
      fs.createReadStream(asset.filePath).pipe(res);
    }
  }
});

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
