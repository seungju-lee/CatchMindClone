import express from "express";
import { join } from "path";

const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server start success!");
});
