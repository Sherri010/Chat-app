var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});


io.on('connection',function(socket){
  console.log('Someone just joined...');
  socket.on('chat message',function(msg){
     console.log('Someone said: ',msg);
     io.emit('chat message',msg);
  });
  socket.on('disconnect',function(){
    console.log('Someone left...');
  });
});
server.listen(3000,function(){
  console.log("Server is listening...");
})