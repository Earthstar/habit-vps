var path = require('path');

module.exports = function(grunt) {

  // Config settings for plugins
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      server: {
        options: {
          server: path.resolve(__dirname, 'app.js'),
          // static files served from here
          bases: [path.resolve(__dirname, 'public')],
          livereload: true,
          serverreload: true,
          port: 3000
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "templates",
          amd: true,
          processName: function(filePath) {
            // remove everything before the last / and the first .
            return filePath.match(/\/(?=[^/]*$)((\w)+)/)[1];
          }
        },
        files: {
          "public/javascripts/templates.js": ["views/*.hbs"]
        }
      }
    }
  });

  // List of plugins
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-express');

  // Map of tasks to plugins
  grunt.registerTask('default', ['handlebars', 'express', 'express-keepalive']);
};