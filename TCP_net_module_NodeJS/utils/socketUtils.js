function socketAddress(socket) {
    console.log("remotePort : ", socket.remotePort);
    console.log("remoteAddress : ", socket.remoteAddress);
}

function socketStats(socket) {
    console.log("bytes read : ", socket.bytesRead);
    console.log("bytes written : ", socket.bytesRead);
}

module.exports = {
    socketAddress,
    socketStats
}