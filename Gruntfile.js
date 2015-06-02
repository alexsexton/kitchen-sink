module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask("default", ["watch", "uglify"]);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "assets/css/screen.css" : "assets/scss/screen.scss"
        }
      }
    },

    uglify: {
      js: {
        files: {
        "assets/js/main.min.js" : "assets/lib/js/main.js",
        "assets/js/plugins.min.js" : "assets/lib/js/plugins.js"
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
            expand: true,
            cwd: 'assets/lib/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/images',
        }],
      },
    },

    watch: {
      css: {
        files: ["**/*.sass", "**/*.scss"],
        tasks: ["sass"]
      },
      js: {
        files: ["**/*.js"],
        tasks: ["uglify"]
      }
    },

  });

}