import {Schema, model} from 'mongoose'

const placesSchema = new Schema({
    name: String,
    street: String,
    city: String,
    coordinates: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Places', placesSchema);