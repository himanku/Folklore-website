const express = require("express");

const { SofaModel } = require("../models/sofa.model");

const sofaRouter = express.Router();


// ----------------- SOFAS DATA GET REQUEST ----------------- //
/*
sofaRouter.get("/", async (request, response) => {
    const query = request.query;

    try {
        const data = await SofaModel.find(query);
        response.send(data);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the sofas data", "Error": error.message });
    }
});
*/

// ----------------- SOFAS DATA GET REQUEST ----------------- //
// sort, filter, search, pagination

sofaRouter.get("/", async (request, response) => {

    try {
        const page = parseInt(request.query.page) - 1 || 0;
        const limit = parseInt(request.query.limit) || 5;
        const search = request.query.search || "";
        let sort = request.query.sort || "rating";
        let brand = request.query.brand || "All";

        const brandOptions = [ "CasaCraft", "Woodsworth", "Febonic", "Durian", "Trevi_Furniture", "Urban_Living" ];

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

        const sofas = await SofaModel.find({ name: { $regex: search, $options: "i" } })
            .where("brand")
            .in([...brand])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await SofaModel.countDocuments({
            brand: { $in: [...brand] },
            name: { $regex: search, $options: "i" }
        });

        const sofasData = {
            error: false,
            total,
            page: page + 1,
            limit,
            brands: brandOptions,
            sofas
        };

        response.status(200).send(sofasData);

    } catch (error) {
        response.send({ "Message": "Failed", "Error": error });
    }
});



// ----------------- SOFAS DATA ADDED POST REQUEST ----------------- //
sofaRouter.post("/addsofa", async (request, response) => {
    const payload = request.body;

    try {
        const data = new SofaModel(payload);
        await data.save();
        response.send({ "Message": "Sofa Data Successfully Added Into the Database!" });
    } catch (error) {
        response.send({ "Message": "Cannot able to add the sofas data", "Error": error.message });
    }
});


// ----------------- SOFAS DATA UPDATE PATCH REQUEST ----------------- //
sofaRouter.patch("/update/:id", async (request, response) => {
    const ID = request.params.id;
    const payload = request.body;

    try {
        await SofaModel.findByIdAndUpdate({ _id: ID }, payload);
        response.send({ "Message": `Sofa Data of Id: ${ID} is successfully updated` });
    } catch (error) {
        response.send({ "Message": `Cannot able to update the sofas data of id: ${ID}`, "Error": error.message });
    }
});


// ----------------- SOFAS DATA DELETE REQUEST ----------------- //
sofaRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await SofaModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": `Sofa Data of id: ${ID} is successfully deleted from the database` });
    } catch (error) {
        response.send({ "Message": `Cannot able to delete the sofas data of id: ${ID}`, "Error": error.message });
    }
});




module.exports = { sofaRouter };