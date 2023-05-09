const {socketAddress, socketStats} = require('./utils/socketUtils')

var net = require('net')

var tcpServer = net.createServer();


tcpServer.on('connection', (socket) => {

    socketAddress(socket)
    
    console.log('a client connected to server');
    
    socket.on('data', (data) => {
        socketStats(socket)                                 // bytes read and write by socket
        console.log(`Received data: ${data}`);
        socket.write(`server reply: ${data}`)
        // socket.end()
    });

    socket.on('end', () => {
        socketStats(socket)                                 // total bytes received by the socket
        console.log('Client disconnected');
    });

}).listen(3000, () => {
    console.log("tcp server listening at port 3000");
})


