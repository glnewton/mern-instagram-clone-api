const express = require('express');
const router = express.Router();
const Messages = require('../models/Message.js');

// Index
// exports.getAllMessages = async (req, res) => {
//     try {
//         await Messages.find({}, (err, foundMessages) => {
//             res.json(foundMessages);
//         });
//     }
//     catch (err) {
//         res.status(500).json({
//             status: "fail",
//             error: err.message
//         });
//     }
// };

router.get('/', (req, res) => {
    try {
        Messages.find({}, (err, foundMessages) => {
            res.json(foundMessages);
        });
    }
    catch (err) {
        res.json({
            error: err.message
        });
    }
});

// New - Will be handled by React application

// Delete
router.delete('/:id', (req, res) => {
    try {
        Messages.findByIdAndRemove(req.params.id, (err, deletedMessage) => {
            res.json(deletedMessage);
        });
    }
    catch (err) {
        res.json({
            error: err.message
        });
    }
});

// Update
router.put('/:id', (req, res) => {
    try {
        Messages.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, 
              runValidators: true
            }, 
            (err, updatedMessage) => {
            res.json(updatedMessage);
        });
    }
    catch (err) {
        res.json({
            error: err.message
        });
    }
});


// Create

router.post('/', (req, res) => {
    Messages.create(req.body, (error, createdMessage) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(createdMessage);
        }
    });
});

// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res) => {
    Messages.findById(req.params.id, (err, foundMessage) => {
        res.json(foundMessage);
    });
});


module.exports = router;
// module.exports = messagesController;