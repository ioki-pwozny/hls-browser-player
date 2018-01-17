const express = require('express'),
opn = require('opn'),
app = express();

app.use(express.static('./'));

const server = app.listen(9889, () => {
    console.log('HLS Browser Player initialized');
    const initParam = process.argv[2];

    let url = 'http://localhost:9889';

    if(initParam){
        url+=`?url=${initParam}`;
    }

    opn(url);
});