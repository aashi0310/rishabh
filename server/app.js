const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';

const User = require('./model/user');
const Post = require('./model/post');
const uploadImage = require('./model/uploadImg');

var serveStatic = require('serve-static')

//upload
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({ storage: storage });


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(serveStatic(path.join(__dirname, './uploads')))
app.use(serveStatic(path.join(__dirname, './uploads')))

//Login API
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        User.find({
            username: req.body.username,
            password: req.body.password
        }, function(err, user) {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }

        })
    });
})

//Get all post API
app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

//Create post API
app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        post.save((err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

//Update post API
app.post('/api/post/updatePost', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        Post.update({ _id: req.body.id }, { title: req.body.title, description: req.body.description },
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
})

//Delete Post
app.post('/api/post/deletePost', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
})

//Delete Gallery
app.post('/api/post/deleteGallery', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        uploadImage.findByIdAndRemove(req.body.id,
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
})



//Display Gallery images
app.post('/api/post/getAllGalleryImages', (req, res) => {
    mongoose.connect(url, function(err) {
        console.log('aashi');
        console.log(req.body.id);
        if (err) throw err;
        uploadImage.findById(req.body.id,
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
})

//Image upload
app.post('/api/upload', upload.array("uploads[]", 12), function(req, res) {
    if (!req.files) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        for (var i = 0; i < req.files.length; i++) {
            var uploadimage = new uploadImage({
                fieldname: req.files[i].fieldname,
                originalname: req.files[i].originalname,
                encoding: req.files[i].encoding,
                mimetype: req.files[i].mimetype,
                destination: req.files[i].destination,
                filename: req.files[i].filename,
                path: req.files[i].path,
                size: req.files[i].size,
                description: req.body.description,
                title: req.body.title
            })
            uploadimage.save(function(err) {
                if (err) { console.log(err) } else {
                    console.log('uploaded');
                    return res.send(req.files[i]);
                }
            })
        }


    }
});

//get all image
app.post('/api/post/getAllImages', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        uploadImage.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.listen(8080, () => console.log('Blog server running on port 8080!'))