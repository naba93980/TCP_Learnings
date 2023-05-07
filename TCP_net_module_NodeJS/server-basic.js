var net = require('net')

var tcpServer = net.createServer();


// When a client connects to the server, the server's net.Server emits a 'connection' event, passing a new Socket instance representing the new connection as an argument to the event handler function
tcpServer.on('connection', (socket) => {

    console.log('a client connected to server');

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        socket.write(`server reply: ${data}`)
        socket.end()
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

}).listen(3000, () => {
    console.log("tcp server listening at port 3000");
})


