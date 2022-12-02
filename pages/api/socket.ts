import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  let messages = []
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('load', load => {
        console.log('hello', load)
        socket.broadcast.emit('update-input', messages)
      })
      socket.on('input-change', msg => {
        messages.push(msg)
        socket.broadcast.emit('update-input', messages)
      })
    })
  }
  res.end()
}

export default SocketHandler