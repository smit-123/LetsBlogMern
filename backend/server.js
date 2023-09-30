const express = require("express");
const app = express()
const cors = require('cors');
const mongoose = require("mongoose")
const routes = require("./src/routes/index")
require('dotenv').config()

app.use(cors("*"));
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    // .connect("mongodb://localhost:27017/practice", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //don't show the log when it is test
        console.log('Connected to DataBase');
        console.log('Press CTRL + C to stop the process. \n');
    })
    .catch((err) => {
        console.error('App starting error:', err.message);
        process.exit(1);
    });

app.get("/", (req, res) => {
    res.send("Blog backend is working")
})

app.use("/api", routes)

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started ");
    }

})