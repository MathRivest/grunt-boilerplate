module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://www.yourdomaine.com/\n' +
        '* Copyright (c) <%= grunt.template.today("dd-mm-yyyy") %>\n' +
        'Your Name*/'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/js/app/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ['compass']
      }
    },
    // Link to config and update the paths
    compass: {
      dist: {
        options: {
          config: 'src/sass/config.rb',
          sassDir: 'src/sass',
          cssDir: 'dist/css'
        }
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: 'src/img',
            src: ['**/*.png'],
            dest: 'dist/img/',
            ext: '.png'
        }]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [{
            expand: true,
            cwd: 'src/img',
            src: ['**/*.jpg'],
            dest: 'dist/img/',
            ext: '.jpg'
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '' //Base path is the current folder
        },
        keepalive: true
      }
    },
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= connect.server.options.port%>'
      }
    }
  });


/* - Load External tasks ---------------------------------------------------------- */

  // Javascript
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // CSS
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Images
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Other
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');


/* - Register tasks --------------------------------------------------------------- */

  // Javascript
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

  // CSS
  grunt.registerTask('css', ['compass']);

  // Images
  grunt.registerTask('img', ['imagemin']);

  // Test tasks
  grunt.registerTask('test', ['jshint']);

  // Start a local web server
  grunt.registerTask('start', [ 'open', 'connect:server:keepalive']);

  // All
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'compass', 'imagemin']);

};