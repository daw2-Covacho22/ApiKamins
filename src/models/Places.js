import {Schema, model} from 'mongoose'

const placesSchema = new Schema({
    username: String,
    name: String,
    street: String,
    city: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Places', placesSchema);