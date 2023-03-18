const http2 = require("http2");
const fs = require("fs");
const port = 8443;

const options = {
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
};

const server = http2.createSecureServer(options);

server.on("stream", (stream, headers) => {
  const path = headers[":path"];
  if (path === "/") {
    fileContent = fs.readFileSync("index.html");
    contentType = "text/html";

    stream.respond({
      "content-type": contentType,
      ":status": 200,
      link: [
        // Pousser les fichiers supplémentaires
        `</assets/demo.css>; rel=preload; as=style`,
        `</assets/seagull.jpg>; rel=preload; as=image`,
      ],
    });
    stream.end(fileContent);
  } else if (path === "/assets/demo.css") {
    stream.respondWithFile("./assets/demo.css", { "content-type": "text/css" });
  } else if (path === "/assets/seagull.jpg") {
    stream.respondWithFile("./assets/seagull.jpg", {
      "content-type": "image/jpeg",
    });
  } else {
    stream.respond({ ":status": 404 });
    stream.end();
  }
});

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
