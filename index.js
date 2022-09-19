const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;


// mongoose.connect('mongodb+srv://Anantha:Anantha@cluster0.nuxbelc.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})



app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})