// Require Express: 
const express = require('express');

// Initiate the app variable: 
const app = express();



//Basic Express server.
// root index route with some text
app.get('/', (req,res) => {
    res.send('This is a test API');
})






//Listen on port 3000:
app.listen(3000);