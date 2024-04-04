const express = require("express");
const app = express();

const port = process.env.port | 3000;

const urlRoute = require("./src/urlRoutes");
const imgRoute = require("./src/imgRoutes");

app.use(express.json());
app.use("/url", urlRoute);
app.use("/img", imgRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));