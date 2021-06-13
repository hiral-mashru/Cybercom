require('dotenv').config();
global.setup = {};
const umzug = require('./core/migration');
require('./core/models');
require('./core/function');
require('./core/services');
require('./core/multer');
require('./core/moduleFunction');
require('./core/moduleServices');
const express = require('express');
const app = express();
const chalk = require('chalk');
const Confirm = require('prompt-confirm');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./core/routes');
const fp = require('find-free-port');
const morgan = require('morgan');
const config = require('./config/config.json');
const crons = require('./core/cron');
const path = require('path');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/docs', express.static(path.join(__dirname, 'docs', 'dest')));

let morganBody = '';
morgan.token('header', function (req) {
	return JSON.stringify(req.headers);
});
morgan.token('body', function (req) {
	return Object.keys(req.body).length == 0 ? '' : JSON.stringify(req.body);
});
const { allowBody, allowHeaders } = config;
if (allowBody && allowHeaders) {
	morganBody =
		':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]] :body :header ';
} else if (allowBody || allowHeaders) {
	morganBody = `:remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]] ${
		allowBody ? ':body' : ':header'
	} `;
} else {
	morganBody =
		':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]]';
}

//logging the details of endpoint
app.use(morgan(morganBody));

//Running the crons
app.use((req, res, next) => {
	crons.forEach((func) => {
		func();
	});
	next();
});

//Routes
for (let route of routes) {
	app[route.method](route.path, route.middlewares, route.action);
}

//migration
umzug.pending().then((migrations) => {
	if (migrations.length != 0) {
		console.log(`All pending migrations are`);
		for (let migration of migrations) {
			console.log(chalk.yellow(migration.file));
		}
		new Confirm('Do you want to migrate all the pending migrations (yes)?')
			.run()
			.then((answer) => {
				if (answer) {
					umzug.up().then(() => {
						console.log(chalk.green('Migration completed!'));
						listenServer();
					});
				}
			});
	} else {
		console.log(chalk.green('No pending migrations'));
		listenServer();
	}
});

//If no routes was matched show 404 not found error
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.statusCode = 404;
	next(error);
});

//Express Error Handling Middleware
app.use((err, req, res, next) => {
	const { statusCode = 500, message = 'Something went wrong' } = err;
	res.status(statusCode).json({
		error: message,
	});
});

//Logging the error
app.use((err, req, res, next) => {
	let caller_line = err.stack.split('\n')[1];
	let index = caller_line.indexOf('at ');
	let clean = caller_line.slice(index + 2, caller_line.length);
	let lineNumber = clean.substr(-6, 2);
	console.log('Error:' + chalk.red(err.message));
	console.log(chalk.yellow(`Error occured at:`) + clean);
	console.log(chalk.yellow('Line Number in which error occured :') + lineNumber);
});

//my server
let PORT = parseInt(process.env.PORT);
process.on('uncaughtException', (error) => {
	if (error.code === 'EADDRINUSE') {
		let freeport = '';
		fp(PORT).then(([freep]) => {
			new Confirm(
				`Port no ${PORT} is busy.Do you want to run it on the avalibale port (${freep})?`
			)
				.run()
				.then((answer) => {
					if (answer) {
						PORT = parseInt(freep);
						listenServer();
					}
				});
		});
	}
});

//function to listen to server
function listenServer() {
	app.listen(PORT, () => {
		console.log(chalk.green(`server is listenining on port ${PORT}`));
	});
}

//A simple comment added by deep to check the working
