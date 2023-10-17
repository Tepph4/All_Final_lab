var expressFunction = require('express')
var expressApp = expressFunction()

const students = [{stdid: 'B6306663', name : 'Teppharit Wongkanok'},
                  {stdid: 'B6306664', name : 'Jaidee Deejai'}
                 ]
expressApp.get('/api/resource/:stdid', function(req, res){
    const stdid = req.params.stdid;
    if(stdid=='B6306663'){
        res.status(200).send(students[0]);
    }
    else if(stdid=='B6306664'){
        res.status(200).send(students[1])
    }
    else{
        res.status(404).send('Error 404 not found');
    }    
});

expressApp.listen(3000,function(){
    console.log('Listening on port 3000')
});