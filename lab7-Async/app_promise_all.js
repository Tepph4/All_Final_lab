const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('The first route to my home'); resolve(1);
    }, 2000);
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('The second route to my home'); resolve(2);
    }, 4000);
})
Promise.all([p1, p2])
    .then(function (result) {
        console.log(result);
    });