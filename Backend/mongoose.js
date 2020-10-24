const mongoose = require('mongoose')
//const db = 'mongodb+srv://dbNavya:Orwwrne01sXtbERD@software-project-rrqec.gcp.mongodb.net/test?retryWrites=true&w=majority'
const db = 'mongodb+srv://prakhar123:prakhar12345@cluster0.8hf8g.mongodb.net/software?retryWrites=true&w=majority'  //iRHy7PA5Y30M0UyA
mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));