const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.use(errorMiddleware);

module.exports = app;