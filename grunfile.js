module.exports = function(grunt) {

  'use strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: ['gruntfile.js']
    },

    simplemocha: {
      all: {
        src: 'test/**/*.js'
      }
    }
  });

  // Load plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Register task(s)
  grunt.registerTask('test', ['simplemocha']);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);

};
