module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
        babel: {
          options: {
              sourceMap: true,
              presets: ['babel-preset-es2015']
          },
          dist: {
              files: {
                  'public/build/js/main.js': 'public/src/es6/main.js'
              }
          }
        },
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
                "public/build/css/style.css": "public/src/less/style.less"
            }
          }
        },
        watch: {
          scripts: {
            files: ['public/src/es6/*.js'],
            tasks: ['babel'],
            options: {
              spawn: false,
            }
          },
          less: {
            files: ['public/src/less/*.less'],
            tasks: ['less'],
            options: {
              spawn: false,
            }
          }
        }
  });

  // grunt.registerTask('default', ['babel','less']);
  grunt.registerTask('default', ['babel','less','watch']);
}
