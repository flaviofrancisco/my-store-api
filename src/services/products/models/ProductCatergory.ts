/* https://www.thekeepitsimple.com/product-hierarchy-example/ */
import mongoose, { Document, Model } from "mongoose";
import { IHasIsDeleted } from "../../common/IHasIsDeleted";

/*
Firstly, the product hierarchy example is product need which symbolizes the reason for which a product exists.
e.g.: Health Care
*/
const ProductCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
    }    
});

export interface IProductCategory extends Document, IHasIsDeleted {
    name: string
}

const ProductCategory: Model<IProductCategory> = mongoose.model("ProductCategory", ProductCategorySchema);

export default ProductCategory;