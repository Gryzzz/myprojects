module.exports = {
		

    init: function(server) {
        console.log("init called");

        var io = require('socket.io').listen(server);
        
    	io.on('chatMessage', function(msg) {
    		alert("1");
    	});
        
    },


    
};

///Server
