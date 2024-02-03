const express = require("express");
const nodeSassMiddleware = require("node-sass-middleware");
const path = require("path");

const app = express();

app.use("/styles",  nodeSassMiddleware({
  src: path.join(__dirname, "public", "styles"), 
  dest: path.join(__dirname, "public", "styles", "gen"), 
  debug: true, 
  outputStyle: "compressed", 
  prefix: "/styles", 
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(3000, () => {
  console.log("Portfolio online on locahost:3000!");
});