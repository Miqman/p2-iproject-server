const express = require("express");
const app = express();
const cors = require("cors");
const index = require("./routes/index");
const errHandle = require("./helpers/errHandler");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", index);

app.use(errHandle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
