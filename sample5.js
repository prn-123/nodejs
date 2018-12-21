var http = require("http");
var https = require("https");

const port = 3000;
const hostname = '127.0.0.1'; 

var options = {
    host: 'somesite.com',
    port: 3000,
    path: '/some/path',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};


exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var port = options.port == 3000 ? https : http;
    var req = port.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });
    res.getJSON(options, function(statusCode, result) {
    console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    res.statusCode = statusCode;
    res.send(result);
});


    req.end();
};
