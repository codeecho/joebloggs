module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist/*"],
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['index.html', 'assets/**/*'],
          dest: 'dist'
        },{
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: ['fonts/**/*'],
          dest: 'dist'
        }]
      }
    },
    concat: {
      js: {
        files: {
          'dist/js/app.js': [
            'src/app/index.js',
            'src/app/main/main.controller.js'
          ],
          'dist/js/vendor.js': [
            'bower_components/jquery/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/bootstrap/dist/js/bootstrap.js'
          ]
        }
      },
      css: {
        files: {
          'dist/css/app.css': [
            'src/app/index.css'
          ],
          'dist/css/vendor.css': [
            'bower_components/bootstrap/dist/css/bootstrap.css'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['clean', 'copy', 'concat']);

  grunt.registerTask('serve', ['build', 'connect']);

  // Default task(s).
  grunt.registerTask('default', ['build']);

};