const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/configRoles");

const prokerRoute = require("./Routes/proker.route");
const pembinaRoute = require("./Routes/pembina.route");
const mahasiswaRoute = require("./Routes/mahasiswa.route");
const authRoute = require("./Routes/auth.route");
const kegiatanRoute = require("./Routes/kegiatan.route");
const userRoute = require("./Routes/activeUser.route");
const getToken = require("./middleware/AuthToken");

mongoose.Promise = global.Promise;
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(config.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

const app = express();
var corsOption = {
  origin: "http://localhost:3000/",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/auth", authRoute);
//app.use(getToken.verifyAuthToken);
app.use("/prokers", prokerRoute);
app.use("/pembina", pembinaRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/kegiatan", kegiatanRoute);
app.use("/register", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on pors ${PORT}`);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
