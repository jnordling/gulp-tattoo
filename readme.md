# gulp-tattoo [![Build Status](https://travis-ci.org/jnordling/gulp-tattoo.svg?branch=master)](https://travis-ci.org/jnordling/gulp-tattoo)

> Tattoo your code with image-ascii and lissence 


## Install

```
$ npm install --save-dev gulp-tattoo
```


## Basic Usage

```js

var asciiArt = '

   _____       _          _______    _   _               \n\
  / ____|     | |        |__   __|  | | | |              \n\
 | |  __ _   _| |_ __ ______| | __ _| |_| |_ ___   ___   \n\
 | | |_ | | | | | '_ \______| |/ _` | __| __/ _ \ / _ \  \n\
 | |__| | |_| | | |_) |     | | (_| | |_| || (_) | (_) | \n\
  \_____|\__,_|_| .__/      |_|\__,_|\__|\__\___/ \___/  \n\
                | |                                      \n\
                |_|                                    \n\

';

var gulp = require('gulp');
var tattoo = require('gulp-tattoo');

gulp.task('default', function () {
	return gulp.src('src/index.html')
		.pipe(tattoo(asciiArt))
		.pipe(gulp.dest('dist'));
});
```

### Use a File 


```js


var gulp = require('gulp');
var tattoo = require('gulp-tattoo');

var asciiArt = fs.readFileSync('header.txt', 'utf8')

gulp.task('default', function () {
	return gulp.src('src/index.html')
		.pipe(tattoo(asciiArt))
		.pipe(gulp.dest('dist'));
});

```


### Use Parameters & Templates 



```js


var gulp = require('gulp');
var tattoo = require('gulp-tattoo');

// Get contents from package.json to use in the tempate
var pkg = require('./package.json');

var asciiArt = fs.readFileSync('header.txt', 'utf8'), { pkg : pkg } )

gulp.task('default', function () {
	return gulp.src('src/index.html')
		.pipe(tattoo(asciiArt))
		.pipe(gulp.dest('dist'));
});

```


## API

### tattoo(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Jon Nordling](https://github.com/jnordling)
