
  $(document).ready(function(){
  var socket = io();

  var name = prompt(" You are?");
  while(name =="" || name == null){
    name = prompt(" I said you are?");
  }
  $('#username').html("<b> logged in as </b> =>  "+name);
  $('form').submit(function(){

    //var name = $('#username').val();
    finalmsg = name+": "+ $('#m').val()

  socket.emit('chat message',finalmsg);
    $('#m').val('');
    return false;
  });
  socket.on('chat message',function(msg){
       $('#messages').append($('<li>').text(msg));
     });
});