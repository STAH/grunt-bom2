grunt-bom2
----------

Grunt task for rewrite file without UTF-8 BOM

Getting Started
===============

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-bom2`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-bom2');
```

[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started
[grunt]: http://gruntjs.com

Documentation
=============

Inside your `Gruntfile.js` file, add a section named `bom2` with one or more targets. Each section contains a files object that specifies the files to rewrite without BOM.

### Example #1

```javascript
module.exports = function (grunt) {
  //...
  grunt.loadNpmTasks("grunt-dustjs");
  //...

  var config = {
    //...
    bom2: {},
    //...
  };

  config.bom2 = {
    main: {
      src: [
        "test.js"
      ]
    }
  };
});
```

Contributing
============
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

Release History
===============
*   __17/10/2012 - 0.1.0__: Initial release.

License
=======
Copyright (c) 2013 Stanislav Lesnikov
Licensed under the MIT license.
