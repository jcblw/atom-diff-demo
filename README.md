## Atom Diff Demo

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/atom-diff-demo.svg)](https://greenkeeper.io/)

First you will need [atom-shell](https://github.com/atom/atom-shell), macs have a prebuilt binary, but everyone else read you os's documentation in the [development docs](https://github.com/atom/atom-shell/tree/master/docs/development).

## Installation

To install the this app just clone this repo and enter the directory.

    $ cd atom-diff-demo

## Running 

To run the app its super simple just run the atom binary given to you while installing [atom-shell](https://github.com/atom/atom-shell) against the `src` directory.

    $ ~/path-to/atom src

A window will open with a header of "changes to TODO.md" now edit and save `src/TODO.md` and the window for atom shell should update showing the diff of that file. Note atom must be ran right outside of the src file in the `atom-diff-demo` file due to some of the pathing in the app.

## Development

To build on the the app all the files reside in the `src` directory.

    diff-demo
    └── src
        ├── package.json
        ├── main.js*
        └── index.html

With atom-shell the entry point is a javascript file specified in the `package.json` and in this application it is `main.js`

ready for more [atom-shell docs](https://github.com/atom/atom-shell/tree/master/docs)