const {socketUtil} = require('./utils/socketUtils')

var net = require('net')

var tcpServer = net.createServer();


tcpServer.on('connection', (socket) => {

    socketUtil(socket)

    console.log('a client connected to server');

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        socket.write(`server reply: ${data}`)
        // socket.end()
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

}).listen(3000, () => {
    console.log("tcp server listening at port 3000");
})


