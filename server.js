const WebSocket = require('ws');

let wsServer = new WebSocket.Server({
    port: 5000
}, console.log("Server open on 5000"));

let users = []

wsServer.on('connection', function (ws) {

    let user = {
        connection: ws
    }

    users.push(user)

    ws.on('message', function message(data, isBinary) {
        const message = isBinary ? data : data.toString();
        for (let u of users) {
            u.connection.send(message)
        }
    })

    ws.on('close', function () {
        let id = users.indexOf(user)
        users.splice(id, 1)
    })

    ws.on('error', function (err) {
        ws.send(err);
    })
})