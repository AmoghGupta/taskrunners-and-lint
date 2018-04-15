module.exports = function(grunt) {
     // Configuration, Tasks and Plugins
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          css: {
            files: [
              '**/*.sass',
              '**/*.scss'
            ],
            tasks: ['compass']
          },
          js: {
            files: [
              '**/*.js',
              'Gruntfile.js'
            ],
            tasks: ['jshint', 'uglify']
          }
        },
        compass: {
          dist: {
            options: {
              sassDir: 'assets/sass',
              cssDir: 'assets/css',
              outputStyle: 'compressed'
            }
          }
        },
        jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          all: ['Gruntfile.js', 'assets/js/*.js']
        },
        uglify: {
          build: {
            files: {
              'assets/minified/js/built.min.js': ['assets/js/*.js']
            }
          }
        }
      });
    
      // Load the Grunt plugins.
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-compass');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-jshint');
    
      // Register the default tasks.
      grunt.registerTask('default', ['watch']);
    };