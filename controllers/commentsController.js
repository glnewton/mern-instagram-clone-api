const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.js');

// Remember INDUCES

// Index - Get all comments
router.get('/', (req, res) => {
    Comment.find({}, (err, foundComments) => {
        res.json(foundComments);
    });
});

// New - Will be handled by React application

// Delete - Delete a comment by commentId
router.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, deletedComment) => {
        res.json(deletedComment);
    });
});

// Update - Update a comment by commentId
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
        res.json(updatedComment);
    });
});

// Create - Create a new comment

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

// Show - Get a comment by commentId
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.json(foundComment);
    });
});

// ***UPDATE***

// Get  all comments by userId getLLCommentsByUser
router.get('/user/:userId', (req, res) => {
    Comment.find({ user: req.params.userId }, (err, foundComments) => {
        res.json(foundComments);
    });
});

// Get all comments by messageId getAllCommentsByMessage
router.get('/message/:messageId', (req, res) => {
    Comment.find({ message: req.params.messageId }, (err, foundComments) => {
        res.json(foundComments);
    });
});


module.exports = router;
