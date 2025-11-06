


const express = require("express")
const port = 3000;
const app = express();

// get mothode
app.get('/', (req, res) => {
    console.log("this is node js and express.js ");
    res.send("this is node js and express js  ");
});
// post method
app.post('/createdata', (req, res) => {
    console.log("data created are success");
    res.send('data created are success');
});
// put method
app.put('/updatedata', (req, res) => {
    console.log("the data are updated successfully");
    res.send('the data are updated successfully');
});
// head method
app.head('/retreivedata', (req, res) => {
    console.log("the data retreived are successfully");
    res.send('the data retreived are successfully');

});
//delete method
app.delete('/removedata', (req, res) => {
    console.log("dadta removed  are sucussfully");
    res.send('dada removed are sucussfully');

});

//listening the server
app.listen(port, () => {
    console.log(`the server is running at localhost:${port}`);
});