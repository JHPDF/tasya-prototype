
var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
const path = require('path')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
.set('view engine', 'ejs')
.set('views', path.join(__dirname, 'views'))
.get('/', (req, res) => res.render('pages/prototype'))


var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {

  var id = setInterval(function() {
    ws.send(JSON.stringify(new Date()), function() {  })
  }, 1000)

  console.log("websocket connection open")


  wss.broadcast = function(data, sender) {
  	console.log(data +": " + sender)
	wss.clients.forEach(function(client) {
    	if (client !== sender) {
     		client.send(data)
    	}
  	})
  }

	ws.on('message', function(message) {
    console.log('message recived: ' + message )
	  wss.broadcast(message, ws);
	})

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})