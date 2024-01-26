const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "express-mysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
};

module.exports = config;
