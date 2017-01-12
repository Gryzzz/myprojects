/**
 * New node file
 */
module.exports = {

    init: function(server) {
        console.log("init called");

        var io = require('socket.io').listen(server);

        io.sockets.on('connection', function(socket) {

            socket.on('controlEmits', function(data) {
                io.sockets.emit("socketCoreEmits", data);

            });

            socket.on('mazeMapReady', function(data) {
                io.sockets.emit("mapEmit", data);
            });

            socket.on('npcReady', function(data) {
                io.sockets.emit("npcEmit", data);
            });


            socket.on('chatMessage', function(msg) {
                io.sockets.emit("chatUpdate", msg);
            });
        });
        /*
            socket.on('gridchanged',function(data){
            	
            	console.log(data.grid);
            });
            
            socket.on('disconnect', function() {
                console.log('disconnected event');
            });
        });
        */

    },

};

///Server
