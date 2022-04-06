const express = require('express')
const app = express()
const port = 9090
var imei = require('node-imei');
var IMEI = new imei()

app.get('/devices/:imei', (req, res) => {
    // read params from user request 
    let imei = req.params.imei
        //check wether the the param is  valid or not
    let is_valid = IMEI.isValid(imei)

    if (is_valid) {
        //is valid IMEI number
        return res.json({ "result": "Your IMEI is valid!" })

    } else {
        //is not valid IMEI number
        return res.json({ "result": "Your IMEI is not valid!" })

    }

});

//start the server at 9090
app.listen(port, () => console.log(`server listening at http://localhost:${port}`))