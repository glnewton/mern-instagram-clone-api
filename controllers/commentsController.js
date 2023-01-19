//Create a comments controller file for the comments routes
//
// Path: mern-instagram-clone-api\controllers\commentsController.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.js');

// Remember INDUCES

// Index
router.get('/', (req, res) => {
    Comment.find({}, (err, foundComments) => {
        res.json(foundComments);
    });
});

// New - Will be handled by React application

// Delete
router.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, deletedComment) => {
        res.json(deletedComment);
    });
});

// Update
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
        res.json(updatedComment);
    });
});

// Create

router.post('/', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(createdComment);
        }
    });
});

// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.json(foundComment);
    });
});

module.exports = router;
