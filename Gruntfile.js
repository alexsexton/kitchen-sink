module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-standard')
  grunt.loadNpmTasks('grunt-modernizr')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.renameTask('watch', '_watch')

  grunt.registerTask('watch', [ 'default', '_watch' ])

  grunt.registerTask('default', ['uglify', 'concat', 'imagemin', 'clean', 'bower-install', 'sass', 'standard', 'copy', 'modernizr'])

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
          'static/css/screen.css': 'assets/scss/screen.scss'
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
          'static/lib/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js',
          'static/fonts/*': 'assets/fonts/*'
        }
      }
    },

    concat: {
      dist: {
        src: ['assets/js/plugins/*.js'],
        dest: 'assets/js/plugins.js'
      }
    },

    uglify: {
      options: {
        seperator: ';\n'
      },
      js: {
        files: {
          'static/js/main.min.js': 'assets/js/main.js',
          'static/js/plugins.min.js': 'assets/js/plugins.js'
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'static/images'
        }]
      }
    },

    watch: {
      css: {
        files: ['assets/scss/**/*.sass', 'assets/scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['static/**/*.js', 'assets/**/*.js'],
        tasks: ['standard', 'uglify', 'concat']
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
  grunt.registerTask('bower-install', 'Installs bower deps', function () {
    var done = this.async()
    var bower = require('bower')

    bower.commands.install().on('end', function () {
      done()
    })
  })
}
