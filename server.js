const express = require('express');

const app=express();
app.get(["/","/index"],function handelRoot(request,response){
    response.send('<h1> hello in our first Rest API </h1>')
});
app.post("/",function(request,response){
    response.status(200).send('<h1> hello in our first Rest API </h1>')
});
app.put("/",function(request,response){
    response.status(200).send('<h1> hello in our first Rest API </h1>')
});

app.listen(3000,function success(){
 console.log('running on 3000');
})
