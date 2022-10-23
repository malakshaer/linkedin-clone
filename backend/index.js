const express = require("express");
require("dotenv").config();
require("./config/db.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const usersRoutes = require("./routes/users.routes");
app.use("/users", usersRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
});
