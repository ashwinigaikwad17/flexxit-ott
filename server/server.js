const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            
//   optionSuccessStatus:200


// }
//app.use(cors(corsOptions));
app.use(cors());


app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/flexxit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});