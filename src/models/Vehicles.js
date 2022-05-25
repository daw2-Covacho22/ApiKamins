import {Schema, model} from 'mongoose'

const vehicleSchema = new Schema({
    brand: String,
    model: String,
    fuel : {
        gama: String,
        autonomy: String
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Vehicle', vehicleSchema);