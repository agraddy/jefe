var args = process.argv.slice(2);
var exec = require('child_process').exec;
var path = require('path');

var config = require(path.join(process.cwd(), '.jefefile'));

if(args[0] == 'rsync') {
	if(args[1] == 'test') {
		exec(config.rsync.test.rsync, function callback(error, stdout, stderr){
			console.log(error);
			console.log(stdout);
			console.log(stderr);
			exec(config.rsync.test.restart, function callback(error, stdout, stderr){
				console.log(error);
				console.log(stdout);
				console.log(stderr);
			});
		});
	} else if(args[1] == 'prod') {
		exec(config.rsync.prod.rsync, function callback(error, stdout, stderr){
			console.log('rsync complete:');
			console.log(error);
			console.log(stdout);
			console.log(stderr);
			exec(config.rsync.prod.restart, function callback(error, stdout, stderr){
				console.log('restart complete:');
				console.log(error);
				console.log(stdout);
				console.log(stderr);
			});
		});
	}
}
