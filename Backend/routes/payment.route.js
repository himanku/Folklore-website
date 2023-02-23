const express = require("express");

const { PaymentModel } = require("../models/paymentDetail.model");

const paymentRouter = express();



// --------------- USER PAYMENT DETAILS GET REQUEST --------------- //
paymentRouter.get("/", async (request, response) => {
    const query = response.query;

    try {
        const details = await PaymentModel.find(query);
        response.send(details);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the user's payment details" });
    }
});




module.exports = { paymentRouter };