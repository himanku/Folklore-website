const express = require("express");

const { DressModel } = require("../models/dress.model");

const dressRouter = express.Router();


// ----------------- DRESS DATA GET REQUEST ----------------- //

dressRouter.get("/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        const data = await DressModel.find({ _id: ID });
        response.send(data);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the dresses data", "Error": error.message });
    }
});


// ----------------- DRESS DATA GET REQUEST ----------------- //
// sort, filter, search, pagination

dressRouter.get("/", async (request, response) => {

    try {
        const page = parseInt(request.query.page) - 1 || 0;
        const limit = parseInt(request.query.limit) || 5;
        const search = request.query.search || "";
        let sort = request.query.sort || "rating" || "lowprice";
        let brand = request.query.brand || "All";

        const brandOptions = [ "Maxi_Dress", "Sleeve_Dress", "Mini_Dress", "Tunic_Dress" ];

        brand === "All"
            ? (brand = [...brandOptions])
            : (brand = request.query.brand.split(","));

        request.query.sort ? (sort = request.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};

        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const dress = await DressModel.find({ name: { $regex: search, $options: "i" } })
            .where("brand")
            .in([...brand])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await DressModel.countDocuments({
            brand: { $in: [...brand] },
            name: { $regex: search, $options: "i" }
        });

        const dressData = {
            error: false,
            total,
            page: page + 1,
            limit,
            brands: brandOptions,
            dress
        };

        response.status(200).send(dressData);

    } catch (error) {
        response.send({ "Message": "Failed", "Error": error });
    }
});




module.exports = { dressRouter };