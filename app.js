const express = require("express");
const app = express();
const PORT = 1510;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`sever is running on port ${PORT}`);
});
