const express = require('express');
const router = express.Router();
const Messages = require('../models/Message.js');

// Index
router.get('/', (req, res)=>{
    Messages.find({}, (err, foundMessages)=>{
        res.json(foundMessages);
    });
});

// New - Will be handled by React application

// Delete
router.delete('/:id', (req, res)=>{
    Messages.findByIdAndRemove(req.params.id, (err, deletedMessage)=>{
        res.json(deletedMessage);
    });
});

// Update
router.put('/:id', (req, res)=>{
    Messages.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMessage)=>{
        res.json(updatedMessage);
    });
});

// Create

router.post('/', (req, res)=>{
    Messages.create(req.body, (err, createdMessage)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.json(createdMessage);
        }
    });
});

// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res)=>{
    Messages.findById(req.params.id, (err, foundMessage)=>{
        res.json(foundMessage);
    });
});


module.exports = router;