function socketUtil(socket) {
    console.log("remotePort : ", socket.remotePort);
    console.log("remoteAddress : ", socket.remoteAddress);
}
module.exports = {
    socketUtil
}