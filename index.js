const express = require("express");
const app = express();
const port = 3000;
const usersRoute = require("./routes/users");
const db = require("./config/sequelize.config");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

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
