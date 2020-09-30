const express = require("express");
const app = express();

const mockUserData =[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: "Succesfully got the users data!",
        users: mockUserData
    })
})
app.listen(8000,function(){console.log("The server is listening!")})