const express = require("express")
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const router= require("./app")



mongoose.connect("mongodb+srv://poojaM:poojaM@cluster0.o0oacpw.mongodb.net/instagram?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

app.use(cors())
app.use(express.static("public"))
app.use(router)


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})