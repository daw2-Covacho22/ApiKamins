import {Schema, model} from 'mongoose'

new Schema ({
    name: {
        type:String
    },
    username: {
        type:String,
        unique:true
    },
    email: {
        type:String,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    roles: []
})