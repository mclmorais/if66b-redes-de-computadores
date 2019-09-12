'use strict'

const net = require('net')

var HOST = '10.3.21.195'
var PORT = 4567

var client = new net.Socket()

client.connect(PORT, HOST, onClientConnected)

function onClientConnected ()
{
  console.log(`Cliente conectado a ${HOST}:${PORT}`)
  client.write('Hello World!')
}

client.on('data', data => console.log(`Cliente recebeu: ${data}`))

client.on('close', () => 'Cliente fechado')

client.on('error', error => console.log(error)
)
