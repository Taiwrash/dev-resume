const express = require("express");
const fs = require("fs");

const app = express();

app.set("view-engine", "ejs");

app.use(express.static("public"));

app.get("/", (_, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.render("index.ejs", {
        items: JSON.parse(data),
      });
    }
  });
});

app.listen(process.env.PORT || 3100, () => {
  console.log(`app listen on ${process.env.PORT || 3100}`);
});
