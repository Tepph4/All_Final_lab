const myAsync = (callback) => {
    console.log('---Start---') 
    setTimeout(() => {
        const res = callback('First');
        console.log(res);
    }, 2000);
    setTimeout(() => {
        const res = callback('Second'); console.log(res);
    }, 1000);
    setTimeout(() => {
        const res = callback('Third'); console.log(res);
    }, 0);
    console.log('--Finish---')
}
const myCallback
    = (message) => {
        return message + ' done!!'
    }
myAsync(myCallback);