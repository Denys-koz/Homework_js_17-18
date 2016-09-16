module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.min.js',
    },
  },

  uglify: {
  dist: {
    files: {
      'js/dist/script.main.min.js': ['js/dist/script.main.min.js']
    }
  }
  },

  cssmin: {
  target: {
    files: {
      'css/dist/main.style.min.js': ['css/src/*.css']
    }
  }
  },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};