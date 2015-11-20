# gulp-tattoo [![Build Status](https://travis-ci.org/jnordling/gulp-tattoo.svg?branch=master)](https://travis-ci.org/jnordling/gulp-tattoo)

> My cat&#39;s meow gulp plugin


## Install

```
$ npm install --save-dev gulp-tattoo
```


## Usage

```js
var gulp = require('gulp');
var tattoo = require('gulp-tattoo');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(tattoo())
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
