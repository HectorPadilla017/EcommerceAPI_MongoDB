const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const productRouter = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/carts", cartRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/products", productRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
