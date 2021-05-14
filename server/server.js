const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const PostRouter = require("./routes/Post");
const connectDb = require("./config/db");

dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

app.get("/", (req, res) => {
  res.json("Hai Iam here......");
});
app.use("/post", PostRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
