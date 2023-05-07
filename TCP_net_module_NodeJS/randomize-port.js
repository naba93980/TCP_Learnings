var net = require('net')

var tcpServer = net.createServer();

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

}).listen(() => {
    const port = tcpServer.address().port
    console.log(port);
    console.log(`tcp server listening at port ${port}`);
})


