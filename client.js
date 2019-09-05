var PORT = 4567;
// var HOST = '127.0.0.1';
// const HOST = '10.181.31.255';
// const HOST = '10.3.20.254';
// const HOST = '10.181.21.225';
const HOST = '10.3.20.68';
var dgram = require('dgram');

// const readline = require('readline');

// const rl = readline.createInterface({
//   input  : process.stdin,
//   output : process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) =>
// {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
const messageString = 'Teste um dois tres\0';
var message = Buffer.alloc(messageString.length, messageString);

var client = dgram.createSocket('udp4');
client.bind(33333);

client.on('listening', function ()
{
  client.setBroadcast(true);

  client.send(message, 0, message.length, PORT, HOST, function (err, bytes)
  {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST + ':' + PORT);
    client.close();
  });
});
