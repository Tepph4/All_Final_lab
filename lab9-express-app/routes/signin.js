const expressFunction = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = expressFunction.Router();

const key = 'MY_KEY';

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    username: String,
    password: String,
}, {
    collection: 'users'
});
let User
try {
    User = mongoose.model('users')
} catch (error) {
    User = mongoose.model('users', userSchema);
}
//compare 
const compareHash = async (plainText, hashText) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashText, (err, data) => {
            if (err) {
                reject(new Error('Error bcrypt compare'))
            } else {
                resolve({ status: data });
            }
        });
    });
}

router.route('/signin')
    .post(async (req, res) => {
        const playload = {
            username: req.body.username,
            password: req.body.password,
        }
        try {
            // 1. Attempt to find the user based on the provided username.
            const result = await findUser(playload.username);

            // 2. Compare the provided password with the stored password for the user.
            const loginStatus = await compareHash(playload.password, result.password);
            const status = loginStatus.status;

            if (status) {
                // 3. If the login was successful, generate a JSON Web Token (JWT) for the user.
                const token = jwt.sign(result, key, { expiresIn: 60 * 5 });
                // 4. Log the token and user information for debugging.
                console.log(token)
                console.log(result)
                // 5. Send a successful response with user data, token, and status.
                res.status(200).json({ result, token, status, });
                console.log("Login successful");
            } else {
                // 6. If the login failed, send a response with only the status.
                res.status(200).json({ status });
            }
        } catch (error) {
            // 7. Handle errors and send a 404 status code with the error message.
            res.status(404).send(error);
        }
    });

const findUser = (username) => {
    console.log("find user"); // Corrected 'conlog.log' to 'console.log'
    return new Promise((resolve, reject) => {
        User.findOne({ username: username }).then(
            (data) => {
                resolve({ id: data._id, username: data.username, password: data.password });
            }
        ).catch((error) => {
            reject(new Error('Cannot find username!')); // Corrected 'Cannont' to 'Cannot'
        });
    });
}


module.exports = router