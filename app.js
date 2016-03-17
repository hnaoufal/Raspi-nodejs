var spawn = require('child_process').spawn,
    tail  = spawn('./test');
//tail.stdout.pipe(process.stdout);

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var readable = tail.stdout.pipe(process.stdout);

readable.on('data',function(chunk){
console.log(chunk);
console.log(decoder.write(chunk));
});

