module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      'nouislider.min.js': 'nouislider.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'uglify'
  ])
}
