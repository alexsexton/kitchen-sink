module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");


  grunt.registerTask("default", ["watch", "uglify", "concat", "imagemin"]);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "static/css/screen.css" : "assets/scss/screen.scss"
        }
      }
    },

    concat: {
      dist: {
        src: ["assets/js/plugins/*.js"],
        dest: "assets/js/plugins.js",
      },
    },

    uglify: {
      options: {
        seperator: ";\n",
      },
      js: {
        files: {
        "static/js/main.min.js" : "assets/js/main.js",
        "static/js/plugins.min.js" : "assets/js/plugins.js"
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
            expand: true,
            cwd: "assets/images",
            src: ["**/*.{png,jpg,gif}"],
            dest: "static/images",
        }],
      },
    },

    watch: {
      css: {
        files: ["**/*.sass", "**/*.scss"],
        tasks: ["sass"]
      },
      js: {
        files: ["static/**/*.js", "assets/**/*.js"],
        tasks: ["uglify", "concat"]
      }
    },

  });

}
