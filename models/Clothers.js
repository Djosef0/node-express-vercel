const mongoose = require("mongoose");

const ClothersSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    size: {type : String},
    sexe: { type: String },
    color:{type:String},
    type:{type:String},
    prix:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Clother", ClothersSchema);
