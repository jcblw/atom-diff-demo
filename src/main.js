/* global require, __dirname, process */

'use strict';

var app = require('app'), 
    BrowserWindow = require('browser-window'),
    file = __dirname + '/TODO.md',
    fs = require('fs'),
    spawn = require('child_process').spawn,
    EventEmitter = require('events').EventEmitter,
    curDiff = '',
    _window;

/* 
    TODO :
    - watch file make it README file
    - when file changes do diff of file
    - add styles to diff
    - spit the output to DOM
*/

fs.watchFile( file, function( ) {
    app.emit('diff:change');
    var diff = spawn('git', ['diff', 'src/TODO.md']);
    diff.stdout.on('data', function( data ) {
        var output = data.toString('utf8'),
            lines = output.split('\n');
        lines.forEach(function(line){
            app.emit( 'diff:chunk', line);
        });
    });
    diff.on('end', app.emit.bind( app, 'diff:end') );
})

// reports crashes to github
require('crash-reporter');

app.on( 'ready', function ( ) {
    console.log('app ready in', process.cwd()); 
    var mainWindow = new BrowserWindow({ 
      width : 500, 
      height : 500 
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on( 'closed', function ( ) {
        mainWindow = null;
    });

    _window = mainWindow;

});

app.on('open:devtools', function( ){
    if ( !_window ) return;
    _window.openDevTools();   
})

