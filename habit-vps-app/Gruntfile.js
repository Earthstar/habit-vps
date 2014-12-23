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
    },
    // initialize data
    mongoimport: {
      options: {
        db: 'habitvps',
        stopOnError: true,
        collections: [
          {
            name: 'items',
            type: 'json',
            file: 'populate/items.json',
            drop: true
          },
          {
            name: 'adventurezones',
            type: 'json',
            file: 'populate/adventurezones.json',
            drop: true
          },
          {
            name: 'pets',
            type: 'json',
            file: 'populate/pets.json',
            drop: true
          },
          {
            name: 'species',
            type: 'json',
            file: 'populate/species.json',
            drop: true
          },
          {
            name: 'todos',
            type: 'json',
            file: 'populate/todos.json',
            drop: true
          },
          {
            name: 'userdatas',
            type: 'json',
            file: 'populate/userdatas.json',
            drop: true
          }
        ]
      }
    }
  });

  // List of plugins
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-mongoimport');

  // Map of tasks to plugins
  grunt.registerTask('default', ['handlebars', 'express', 'express-keepalive']);
  grunt.registerTask('populate', ['mongoimport']);
};