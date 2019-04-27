var http = require("http");

var opcoes = {
    hostmame: "localhost",
    port: 8081,
    path: "/teste",
    method: "post",
    headers: {
        "Accept" : "application/json",
        "Content-type":"application/x-www-form-urlencoded"
    }
}

//content-type
//x-www-form-urlencoded
var html = "nome=renan";
var json= {
    nome: "renan"
}

var json_string = JSON.stringify(json);


var buffer_corpo_response = [];

var req = http.request(opcoes, (res)=>{
    res.on("data", function(pedaco){
        buffer_corpo_response.push(pedaco)
    })

    res.on("end", ()=>{
        console.log(Buffer.concat(buffer_corpo_response).toString());
    })

})

req.write(json_string);

req.end();