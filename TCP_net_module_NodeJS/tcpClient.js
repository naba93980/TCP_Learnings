const net = require('net')
const {socketAddress, socketStats} = require('./utils/socketUtils')

const socket = net.connect({ port: 3000 }, () => {
    socket.write("hi from client")
    socketAddress(socket)
})


socket.setEncoding('utf-8')

socket.on('data', (data) => {
    console.log(data)
    socketStats(socket)
    // socket.destroy()
})
 
socket.on('end', () => {
    console.log('End event on client')
})

socket.on('close', () => {
    console.log('close event on client')
}) 

// for checking load
setInterval(()=>{
    socket.write('ping pong')
},1)