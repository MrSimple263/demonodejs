var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
var server=require("http").createServer(app).listen(8080);
var io=require("socket.io")(server);
io.on('connection',function (socket) {
    console.log("co nguoi ket noi:"+socket.id);
    socket.on("disconnect",function () {
        console.log("ngat ket noi");
    })
    socket.on("client-send-data",function (data) {
        console.log(data);
    })
});
app.get('/',function (req,res) {
    res.render("trangchu");
});