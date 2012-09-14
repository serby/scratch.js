var
	util = require('util'),
	fs = require('fs'),
	readFile = fs.createReadStream('./test.dat'),
	writeFile = fs.createWriteStream('./out.dat', { flags: 'w' });

writeFile.on('drain', function() {
	//console.log('.');
});

// util.pump(readFile, writeFile, function() {
// 		console.log('Complete');
// });
readFile.pipe(writeFile);

readFile.on('end', function() {
	console.log('Complete');
});