const mongoose = require("mongoose");



const addtocartSchema = mongoose.Schema({
    item: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    userID: { type: String, required: false }
}, {
    versionKey: false
});



const CartModel = mongoose.model("cart", addtocartSchema);



module.exports = { CartModel };