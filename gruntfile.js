/**
 * Feature Module Build.
 *
 * @author potanin@UD
 * @version 1.1.2
 * @param grunt
 */
module.exports = function build( grunt ) {

  grunt.initConfig({

    // Ready Composer Meta.
    meta: grunt.file.readJSON( 'composer.json' ),

    // Read Composer File.
    settings: grunt.file.readJSON( 'composer.json' ).extra,

    // Locale.
    pot: {
      options:{
        package_name: '<%= settings.name %>',
        package_version: '<%= settings.version %>',
        text_domain: '<%= settings.name %>',
        dest: 'static/languages/',
        keywords: [ 'gettext', 'ngettext:1,2' ]
      },
      files:{
        src:  [ 'lib/*.php' ],
        expand: true
      }
    },

    // Generate Documentation.
    yuidoc: {
      compile: {
        name: '<%= meta.name %>',
        description: '<%= meta.description %>',
        version: '<%= meta.version %>',
        url: '<%= meta.homepage %>',
        options: {
          paths: [ 'lib', 'static/scripts/src' ],
          outdir: 'static/codex/'
        }
      }
    },

    // Compile LESS.
    less: {
      development: {
        options: {
          yuicompress: false,
          relativeUrls: true
        },
        files: {
          'static/styles/wpp.admin.tools.dev.css': [ 'static/styles/src/wpp.admin.tools.dev.less' ]
        }
      },
      production: {
        options: {
          yuicompress: true,
          relativeUrls: true
        },
        files: {
          'static/styles/wpp.admin.tools.css': [ 'static/styles/src/wpp.admin.tools.less' ]
        }
      }
    },

    // Development Watch.
    watch: {
      options: {
        interval: 100,
        debounceDelay: 500
      },
      less: {
        files: [
          //'static/styles/src/*.*'
        ],
        tasks: [ 'less:production' ]
      },
      js: {
        files: [
          'static/scripts/src/*.*'
        ],
        tasks: [ 'uglify:production' ]
      }
    },

    // Uglify Scripts.
    uglify: {
      production: {
        options: {
          preserveComments: false,
          wrap: false
        },
        files: [
          {
            expand: true,
            cwd: 'static/scripts/src',
            src: [ '*.js' ],
            dest: 'static/scripts'
          }
        ]
      }
    },

    // Generate Markdown.
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'readme.md',
            dest: 'static/',
            ext: '.html'
          }
        ],
        options: {
          markdownOptions: {
            gfm: true,
            codeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        }
      }
    },

    // Clean for Development.
    clean: {},

    // Usage Tests.
    mochacli: {
      options: {
        requires: [ 'should' ],
        reporter: 'list',
        ui: 'exports',
        bail: false
      },
      all: [
        'test/*.js'
      ]
    }

  });

  // Load NPM Tasks.
  grunt.loadNpmTasks( 'grunt-markdown' );
  grunt.loadNpmTasks( 'grunt-requirejs' );
  grunt.loadNpmTasks( 'grunt-contrib-yuidoc' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-mocha-cli' );
  grunt.loadNpmTasks( 'grunt-pot' );

  // Register NPM Tasks.
  grunt.registerTask( 'default', [ 'markdown', 'less:production' , 'yuidoc', 'uglify:production' ] );

  // Build Distribution.
  grunt.registerTask( 'distribution', [ 'mochacli:all', 'mochacov:all', 'clean:all', 'markdown', 'less:production', 'uglify:production' ] );

  // Update Environment.
  grunt.registerTask( 'update', [ 'clean:update', 'shell:update' ] );

};