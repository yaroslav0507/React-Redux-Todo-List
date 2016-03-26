const express = require('express'),
      app     = express(),
      path    = require('path');
require('dotenv').load();

app.use(express.static(path.join(__dirname, './build')));

var port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, function(){
    console.log('Express server listening on port: ' + port);
});
