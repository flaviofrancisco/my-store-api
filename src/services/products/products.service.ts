import express from "express";
import ProductCatergory from "./models/ProductCatergory";

export const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
    const result = await ProductCatergory.find()
        .populate('category', 'name')
        .sort({
            name: 1,
        });
    res.status(200).send(result);
});

productsRouter.get('/:id', async (req, res) => {
    const result = await ProductCatergory.findById(req.params.id);
    if (!result) { return res.status(404).send(`Category with id: ${req.params.id} not found.`); }
    res.status(200).send(result);
});

productsRouter.post("/", async (req, res) => {
    const result = await new ProductCatergory({
        ...req.body,
    }).save();
    res.status(201).send(result);
});

productsRouter.put("/:id", async (req, res) => {
    const result = await ProductCatergory.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    if (!result) { return res.status(404).send(`Category with id: ${req.params.id} not found.`); }
    res.send(result);
});

productsRouter.delete("/:id", async (req, res) => {
    const result = await ProductCatergory.findByIdAndDelete(req.params.id);
    if (!result) { return res.status(404).send(`Category with id: ${req.params.id} not found.`); }
    res.send(result);
});

exports.productsRouter = productsRouter;