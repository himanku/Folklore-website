const mongoose = require("mongoose");



const paymentDetailSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mobile_number: { type: Number, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postcode : { type: Number, required: true },
    
    userID: { type: Number, required: false }
}, {
    versionKey: false
});



const PaymentModel = mongoose.model("paymentdetail", paymentDetailSchema);



module.exports = { PaymentModel };