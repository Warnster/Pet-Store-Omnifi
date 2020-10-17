import mongoose from "mongoose";


const Schema = mongoose.Schema;

const PetSchema = new Schema({
   firstName: {
       type: String,
       required: true,
   },
   weight: {
       type: Number,
       required: true
   },
   price: {
       type: Number,
       required: true
   },
   species: {
       type: String,
       required: true
   }
}, {
    timestamps: true,
    collection: 'pets'
});

export default mongoose.model('Pet', PetSchema);
