import express from "express";
import AttributeModel from "./models/Attribute";

export const attributesRoute = express.Router();

attributesRoute.get("/", async (req, res) => {
  const attributes = await AttributeModel.find().sort({
     name: 1,
  });
  res.send(attributes);
  res.status(200);
});

attributesRoute.post("/", async (req, res) => {
  const attribute = await new AttributeModel({
    ...req.body,
  }).save();
  res.send(attribute);
  res.status(201);
});
