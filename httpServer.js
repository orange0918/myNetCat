
/*
var http = require('http');
var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World\n');
});

//listen port
server.listen(9999);

console.log('server running.'); 
*/


var net = require('net');

//create server
var server = net.createServer();

//listen port
server.listen(9999);

//when new connection is established.
server.on('connection', function(socket){
	console.log('new connection is on.');
	socket.write("Hello\n");

	process.stdin.on('data', function(data){
		socket.write(data);
	})
	//when client has sended 'data'
	socket.on('data', function(chunk){
		//print string
		console.log(chunk.toString());
		//send back echo message to client.
		socket.write("you are saying "+chunk.toString());
	});
});

//var socket = new net.Socket();

