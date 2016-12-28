module.exports = function (grunt) {
  'use strict'

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-standard')
  grunt.loadNpmTasks('grunt-modernizr')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      production: {
        src: [
          'static/'
        ]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'static/css/main.css': 'assets/scss/main.scss'
        }
      }
    },

    modernizr: {
      production: {
        'crawl': false,
        'customTests': [],
        'dest': 'static/lib/modernizr.min.js',
        'tests': [
          'flexbox',
          'svg'
        ],
        'options': [
          'html5printshiv',
          'html5shiv',
          'setClasses'
        ],
        'uglify': true
      }
    },

    copy: {
      production: {
        files: {
          'static/lib/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/app/*.js'],
        dest: 'assets/js/app.js'
      }
    },

    uglify: {
      options: {
        seperator: ';\n'
      },
      js_app: {
        files: {
          'static/js/app.min.js': 'assets/js/app.js'
        }
      },
      js_main: {
        files: {
          'static/js/main.min.js': 'assets/js/main.js'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'static/images/'
        }]
      }
    },

    _watch: {
      css: {
        files: ['assets/scss/**/*.scss', 'assets/scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['static/**/*.js', 'assets/**/*.js'],
        tasks: ['standard', 'concat', 'uglify']
      }
    },

    standard: {
      production: {
        src: [
          'Gruntfile.js',
          'assets/js/main.js'
        ]
      }
    }
  })

  grunt.renameTask('watch', '_watch')

  grunt.registerTask('watch', [ 'default', '_watch' ])

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'imagemin', 'bower-install', 'sass', 'standard', 'copy', 'modernizr'])

  grunt.registerTask('bower-install', 'Installs bower deps', function () {
    var done = this.async()
    var bower = require('bower')

    bower.commands.install().on('end', function () {
      done()
    })
  })
}
