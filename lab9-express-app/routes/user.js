var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// disign chema
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

// make common data to hash
const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}
// insertdata 
const insertUser = (dataUser) => {
    return new Promise((resolve, reject) => {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password
        });        
        new_user.save().then((data) => {
            console.log(data)
            {
                resolve({ message: 'Singn up successfully' });
            }
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}
router.route('/signup')
    .post((req, res) => {
        //  makeHash (password)
        makeHash(req.body.password).then(hashText => {
            //set data 
            const playload = {
                username: req.body.username,
                password: hashText,
                
            }
            console.log(playload);
            //call insertUser func            
            insertUser(playload)
                .then(result => {
                    console.log(result);
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
    });
module.exports = router