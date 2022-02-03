import mongoose, { Document, Model } from "mongoose";

const AttributeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
});

export interface IAttribute extends Document {
    name: string,
    collectionName: string,
    isDeleted: boolean    
}

const AttributeModel: Model<IAttribute> = mongoose.model("Attribute", AttributeSchema);

export default AttributeModel;