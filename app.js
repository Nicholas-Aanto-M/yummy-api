const express = require("express");
const app = express();
const PORT = 1510;

const cors = require("cors");
app.use(express.json());
app.use(cors());

const recipeRoutes = require("./routerdb");

app.use("/home", recipeRoutes);
app.use((req, res, next) => {
  return res.status(404).send({
    message: "resource not found",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`sever is running on port ${PORT}`);
});
