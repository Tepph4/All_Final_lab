const jwt = require('jsonwebtoken');

const playload = {
    stdid : 'B6306663',
    name : 'Teppharit Wongkanok',
    major: 'CPE'
}

const key = 'MY_KEY';
const token = jwt.sign(playload, key, {expiresIn: 60*5});
console.log(token)

try{
    const dataIntoken = jwt.verify(token, key);
    console.log(dataIntoken)
}catch(error){
    console.log(err)
}