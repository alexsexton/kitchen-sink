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
          "assets/css/screen.css" : "src/scss/screen.scss"
        }
      }
    },

    concat: {
      dist: {
        src: ["src/js/plugins/*.js"],
        dest: "src/js/plugins.js",
      },
    },

    uglify: {
      options: {
        seperator: ";\n",
      },
      js: {
        files: {
        "assets/js/main.min.js" : "src/js/main.js",
        "assets/js/plugins.min.js" : "src/js/plugins.js"
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
            expand: true,
            cwd: "src/images",
            src: ["**/*.{png,jpg,gif}"],
            dest: "assets/images",
        }],
      },
    },

    watch: {
      css: {
        files: ["**/*.sass", "**/*.scss"],
        tasks: ["sass"]
      },
      js: {
        files: ["assets/**/*.js", "src/**/*.js"],
        tasks: ["uglify", "concat"]
      }
    },

  });

}