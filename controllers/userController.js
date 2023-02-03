const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    const hashPassword = await bcrypt.hash(password, 12);

    User.create({ username, password: hashPassword, email }, (error, newUser) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.json(newUser);
        }
    });
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    console.log (username, password);
    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({ error: 'Username not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json(user);
        }
        else {
            res.status(400).json({
                error: 'Username or password is incorrect'
            });
        }
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});


module.exports = router;