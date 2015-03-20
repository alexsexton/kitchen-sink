module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
        "assets/js/main.min.js" : "assets/lib/main.js",
        "assets/js/plugins.min.js" : "assets/lib/plugins.js"
        }
      }
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