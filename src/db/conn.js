const mongoose = require("mongoose");
const DB = "mongodb+srv://mohammadauf:belajr7bhai@cluster0.khb2w.mongodb.net/registration?retryWrites=true&w=majority"

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
}).then(() => {
    console.log("connection sucessful");
}).catch((e) => {
    console.log(e);
})