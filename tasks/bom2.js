/*
 * grunt-bom2
 * https://github.com/STAH/grunt-bom2
 *
 * Copyright (c) 2013 Stanislav Lesnikov
 * Licensed under the MIT license.
 * https://github.com/STAH/grunt-bom2/blob/master/LICENSE-MIT
 */


module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('bom2', 'Rewrite file without UTF-8 BOM.', function ()
  {
    this.files.forEach(function (file) {
      var srcFiles = grunt.file.expand(file.src),
          taskOutput = [];

      srcFiles.forEach(function (filepath) {
        var content = grunt.file.read(filepath);
        if (/\uFEFF/.test(content)) {
          content = content.replace(/\uFEFF/g, '');
          grunt.file.write(filepath, content);
          grunt.log.writeln('File "' + filepath + '" rewritten.');
        }
      });
    });
  });
};
