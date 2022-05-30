import {Schema, model} from 'mongoose'

const vehicleSchema = new Schema({
    username: String,
    brand: String,
    model: String,
    tipo: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Vehicle', vehicleSchema);