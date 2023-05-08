var net = require('net')

var tcpServer = net.createServer();

tcpServer.maxConnections = 3;

tcpServer.on('connection', function (socket) {

    console.log('a client connected to server');

    this.getConnections((error, count) => {
        console.log(`Number of connections : ${count}`);
    })

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`)
        socket.write(`server reply: ${data}`)
        socket.emit('error', new Error('Forcefully injected error'))
        socket.end('I am closing')
    });

    socket.on('error', (err) => {
        console.log(err);
    })

    socket.on('end', () => {
        console.log('Client disconnected');
    });

}).listen(3000, () => {
    console.log("tcp server listening at port 3000");
})
