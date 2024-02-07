const express = require("express");
const app = express();
const port = 3000;

const usersRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const itemCategoriesRoute = require("./routes/itemCategories.route");
const db = require("./config/sequelize.config");
const passport = require("passport");
require("dotenv").config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.initialize());

/* SEQUELIZE SYNC */
db.sequelize
  .sync()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Failed to sync DB:" + err.message);
  });

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Server running !",
  });
});

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/item-categories", itemCategoriesRoute);

// Error Handling
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    code: statusCode,
    message: err.message,
  });
  return;
});

app.listen(port, () => {
  console.log("Server running at port 3000");
});
