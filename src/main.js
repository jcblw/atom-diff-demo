/* global require, __dirname, process */

'use strict';

var app = require('app'), 
    BrowserWindow = require('browser-window'),
    file = __dirname + '/TODO.md',
    fs = require('fs'),
    spawn = require('child_process').spawn;

// reports crashes to github
require('crash-reporter');

// function to handle change events from file
function onChange ( ) {
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
}

// wathcing for changes
fs.watchFile( file, onChange );


// when app is ready
app.on( 'ready', function ( ) {
    // creating a window
    var mainWindow = new BrowserWindow({ 
      width : 500, 
      height : 500 
    });

    // loading file
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on( 'closed', function ( ) {
        mainWindow = null;
    });

    // once the content is loaded
    mainWindow.webContents.on( 'did-finish-load', function ( ) {
        // set initial state
        onChange( );
    });

    if( process.argv[2] === 'debug' ) {
        mainWindow.openDevTools();
    }

});