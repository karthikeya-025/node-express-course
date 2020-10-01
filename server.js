const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const mockUserData =[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: "Got one user!",
        users: req.params.id
    })
})
app.post('/login',function(req,res){
    const username = req.body.username
    const password = req.body.password

    const mockUsername = "BillytheKid"
    const mockPassword = "supersecret"

    if(username===mockUsername && password===mockPassword){
        res.json({
            success : true,
            message : 'Username and password matched',
            token: 'encrypted token goes here'
        })
    }else{
        res.json({
            success : false,
            message : "The username or password does not match"
        })
    }
})
app.listen(9000,function(){console.log("The server is listening!")})