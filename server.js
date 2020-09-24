const express = require("express");
const fs = require("fs");

const app = express();

app.set("view-engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.render("index.ejs", {
        items: JSON.parse(data),
      });
      console.log(data);
    }
  });
});

app.listen(process.env.PORT || 3100, () => {
  console.log(`app listen on PORT `);
});
