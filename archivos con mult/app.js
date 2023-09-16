const express = require('express')
const multer = require('multer')
const sharp = require('sharp')

const port = process.env.PORT || 5000

const app = express()
app.use(express.json())

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb( new Error('Please upload a valid image file'))
    }
        cb(undefined, true)
    }
})

app.post('/image', upload.single('upload'), async (req, res) => {
    try {
        await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(__dirname + `/images/${req.file.originalname}`)
        console.log(req.file)
        res.status(201).send('Image uploaded succesfully')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


app.listen(port, () => {
console.log('Server is running on port '+ port)
})