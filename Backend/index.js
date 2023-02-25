require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set('strictQuery', true)

const { connection } = require("./configs/db.connnect");
const { sofaRouter } = require("./routes/sofa.route");
const { dressRouter } = require('./routes/dress.route');
const { authRouter } = require("./routes/auth.route");
const { authenticate } = require("./middlewares/auth.middleware");
const { cartRouter } = require('./routes/addtocart.route');
const { paymentRouter } = require("./routes/payment.route");

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
    response.send("Welcome to NEM-111 project of Anthropologie website");
});

app.use("/users", authRouter);
app.use("/sofas", sofaRouter);
app.use("/dress", dressRouter);
app.use(authenticate);
app.use("/carts", cartRouter);
app.use("/paymentdetails", paymentRouter);



app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log("Cannot able to start the server", "Error: ",error);
    }
});