const p = new Promise(function(resolve, reject){
    setTimeout(() => {
        let sid = 'B6306663';
        if(sid){
            resolve({id: sid, name: 'Teppharit'});
        }
        else{
            reject(new Error('Error 404 Bad Request'))
        }
    }, 1000);
})

p.then(result =>{
    console.log(result);
})
.catch(function(err){
    console.log(err);
})
