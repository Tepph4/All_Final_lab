const checkAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username == 'teppharit' && password == 'B6306663') {
                console.log('---checkAuth---')
                resolve({ authData: username + password })
        }else {
            reject(new Error('Authentication Fail!!'))
        }
    }, 2000);
    
});
}
const getStudent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('---getStudent---')
            const data = { name: 'Teppharit Wongkanok', permission: 'Admin' };
            resolve(data)
        }, 3000);
    });
}

const getTheResult = async () => {
    const auth = await checkAuth('teppharit', 'B6306663');
    const data = await getStudent(auth);
    console.log(data);
}

console.log('--Start---')
getTheResult();
console.log('---Finish---')