const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

//connect to mongodb uri
const db = 'mongodb://vpmaruthi:videoplayer123@ds155097.mlab.com:55097/vdoplayer';
mongoose.connect(db, function(err){
    if(err){
        console.log('Error!', err);
    }
});

//home api
router.get('/', function(req, res){
    res.send('api works');
});

//fetching all videos
router.get('/videos', function(req, res){
    Video.find({},function(err, videos){
        if(err){
            console.log('Error retrieving videos!');
        }else{
            res.json(videos);
        }
    });
});

//fetching a single video
router.get('/videos/:id', function(req, res){
    Video.findById(req.params.id,function(err, video){
        if(err){
            console.log('Error retrieving video');
        }else{
            res.json(video);
        }
    })
});

//post a video
router.post('/video', function(req, res){
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error posting a new video');
        }else{
            res.json(insertedVideo);
        }
    })
});

//update a video by its id
router.put('/video/:id', function(req, res){
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{title: req.body.title, url: req.body.url, description: req.body.descrition}
    },
    {
        new: true
    },
        function(err, updatedVideo){
            if(err){
                console.log('Error updating a video');
            }else{
                res.json(updatedVideo);
            }
        }
    )
});


//delete a video by its id
router.delete('/video/:id', function(req, res){
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            console.log('Error deleting a video');
        }else{
            res.json(deletedVideo);
        }
    })
});

//export the router
module.exports = router;