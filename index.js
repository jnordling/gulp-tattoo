'use strict';
var Concat = require('concat-with-sourcemaps');
var extend = require('object-assign');
var through = require('through2');
var gutil = require('gulp-util');
var stream = require('stream');
var path = require('path');
var fs = require('fs');



module.exports = function (tattoo, data) {
	// Checks that there is a tattoo passed
	if (!tattoo) {
		throw new gutil.PluginError('gulp-tattoo', '`tattoo` required');
	}

	function BlockComment(extension){
		var comment;
		if(extension == '.html'){

		}else if(extension == '.css'){

		}
		return comment
	}

	function TransformStream(file, enc, cb){
	    var filename;
	    var concat;

	    console.log(path.extname(file.path));
        // Checks that the files passed in Stream or Buffer
	    if (file.isNull()) {
            return cb(null, file);
        }
        // Defined type of file that is passed in
	    if (typeof file === 'string') {
	      filename = file;
	    } else if (typeof file.path === 'string') {
	      filename = path.basename(file.path);
	    } else {
	      filename = '';
	    }

	    var tattooInk;
	    if(data ===false){
	    	tattooInk = tattoo;
	    }else{
	    	// Use Gulp Template and add in data object to tattoo
	    	tattooInk = gutil.template(tattoo, extend({file : file, filename: filename}, data));
	    }

	    path.extname(file.path)

	    concat = new Concat(true, filename);

	    if (gutil.isBuffer(file)){
	      concat.add(filename, new Buffer(tattooInk));
	    }else if(gutil.isStream(file) ){
	      var stream = through();
	      stream.write(new Buffer(tattooInk));
	      stream.on('error', this.emit.bind(this, 'error'));
	      file.contents = file.contents.pipe(stream);
	    }

	    // add sourcemap
	     concat.add(file.relative, file.contents, file.sourceMap);

	    // make sure streaming content is preserved
	    if (file.contents && !gutil.isStream(file.contents)) {
	      file.contents = concat.content;
	    }

	    // apply source map
	    if (concat.sourceMapping) {
	      file.sourceMap = JSON.parse(concat.sourceMap);
	    }

	     // make sure the file goes through the next gulp plugin
	     this.push(file);

	    // tell the stream engine that we are done with this file
	    cb();

	}

	return through.obj(TransformStream);
};


