
  $(document).ready(function(){
    var socket = io();

    //makes sure to get the username...for now :)
    var name = prompt(" You are?");
    while(name =="" || name == null){
      name = prompt(" I said you are?");
    }

    $('#username').html("<b> logged in as </b> =>  "+name);


     var status="free";
    $('#m').keypress(function() {
    socket.emit('chat message',{user:name,msg:$('#m').val()});
    status="typing";
    });
    //user writes a msg
    $('form').submit(function(){
      //finalmsg = name+": "+ $('#m').val()
      socket.emit('chat message',{user:name,msg:$('#m').val()});
      $('#m').val('');
        return false;
    });

    //recieves a msg
    socket.on('chat message',function(msg){
         // cleanUp();
         // var newMsg = $('li').attr('class',msg);
         // newMsg.text(msg);
          console.log(msg.user," ",msg.msg);
         $('#messages').html("<li>"+msg.msg+"</li>");
       });

    // function cleanUp(){
    //   var last =$('#messages').last();
    //   console.log(last)
    // }
});