/* global require, __dirname, process */

'use strict';

var app = require('app'), 
    BrowserWindow = require('browser-window'),
    file = './TODO.md',
    // gaze = require('gaze'),
    spawn = require('child_process').spawn,
    // todo = gaze ( file ); 
    curDiff = ''
    _window;

/* 
    TODO :
    - watch file make it README file
    - when file changes do diff of file
    - add styles to diff
    - spit the output to DOM
*/


// todo.on('change', function(){
//     var diff = spawn('git', ['diff', file]);
//     diff.on('data', app.emit.bind( app, 'diffChunk' ));
// });

// reports crashes to github
require('crash-reporter');

app.on( 'ready', function ( ) {
    
    var mainWindow = new BrowserWindow({ 
      width : 200, 
      height : 400 
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on( 'closed', function ( ) {
        mainWindow = null;
    });

});

