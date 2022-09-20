const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const multer = require('multer');
const Post = require('./Models/Post');
const fs = require('fs');
const path = require("path")
const router= express.Router()

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  });
const upload = multer({ storage: Storage })

app.use(bodyParser.json());
app.use(cors());


router.get('/', async (req, res) => {
    console.log("Browser requested");
    try {
        const results = await Post.find();
        res.json(results);
    } catch (e) {
        res.status(400).json({ error: e })
        console.log(e)
    }
})
router.post('/post', upload.single('PostImage'), async (req, res) => {
    try {
        let data =  await  Post.create({
            name: req.body.name,
            location: req.body.location,
            likes: 30,
            description:req.body.description,
            PostImage: "/images/"+req.file.filename,
        })
       
        res.status(201).json(data);
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})



module.exports = router;