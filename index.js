const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const clotherRoute = require("./routes/clothers");
const listRoute = require("./routes/lists");
const path = require("path");
const cors = require("cors");


dotenv.config();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/clothers", clotherRoute);
app.use("/api/lists", listRoute);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get('*', function(_, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html')),
//   function (err){
//     if(err){
//       res.status(500).send(err);
//     }
//   }
// });

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
