# [Stackoverflow](http://stackoverflow.com) questions tracker

[![Build Status](https://travis-ci.org/nolexa/so-console.svg?branch=master)](https://travis-ci.org/nolexa/so-console)

**SO-console** is a desktop application for tracking newest [Stackoverflow](http://stackoverflow.com) questions by tags.
It is written in JavaScript, built with [NW.js](http://nwjs.io) desktop toolkit,
and is run with [node.js](http://nodejs.org) runtime.

### Features

- Runs on Windows, MacOS, Linux
- Shows latest questions for selected tags
- Refreshes the list automatically
- Shows screen notifications for new questions
- Opens a detailed question page in a browser

### How to use

- Install and run the application as described below.
- Enter a comma separated list of tags to follow. Press `Enter`.
- Click the question titles to get them in a browser.
- Click the tags list at the top of the screen to edit the tags.

## Downloads

Download binaries for your platform from the [latest release](https://github.com/nolexa/so-console/releases/latest).

Unzip the archive and run `so-console.exe` on `Windows`, or `so-console` on other platforms.

## Building from source code

### Install Node.js and NPM

Follow the installation guidelines at [nodejs.org](http://nodejs.org)

### Get the sources

Download the [project's archive](http://github.com/nolexa/so-console/archive/master.zip),
or clone it with git `git clone https://github.com/nolexa/so-console.git`.  

### Install [NW.js](http://nwjs.io)

Step into the project's directory and run

```
npm install -g nw
```

### Install dependencies

```
npm install
```

### Run the application

```
npm start
```

## Contributing

Just fork it and start hacking. Every help is welcome. Check the list of issues for the backlog. 