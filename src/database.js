import mongoose from 'mongoose'
//mongodb://localhost/Kamins
mongoose.connect("mongodb+srv://covacho_sara:Daw2_2021@cluster0.olbhw.mongodb.net/Kamins?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('db is connected'))
.catch(error=>console.log(error))