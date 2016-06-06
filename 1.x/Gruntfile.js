'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = grunt.file.readYAML('./_config.yml');

    // Configurable paths
    var paths = {
        tmp: '.tmp',
        assets: 'generated',
        downloads: 'downloads'
    };

    grunt.initConfig({

        // Project settings
        paths: paths,
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['front/scripts/{,*/}*.js'],
                tasks: ['jshint', 'concat:mainjs', 'concat:appDemojs']
            },
            sass: {
                files: ['usptostrap/sass/**/*.scss', 'front/styles/**/*.scss'],
                tasks: ['sass', 'usebanner', 'concat:maincss', 'autoprefixer']
            }
        },

        // Clean out gen'd folders
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= paths.tmp %>',
                        '<%= paths.assets %>',
                        '<%= paths.downloads %>'
                    ]
                }]
            },
        },

        sasslint: {
            options: {
                configFile: '_sass-lint.yml',
                formatter: 'junit',
                outputFile: 'report.xml'
            },
            target: ['front/*.scss', 'usptostrap/sass/**/*.scss']
        },

        // Lint JS
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'front/scripts{,*/}*.js'
            ]
        },

        sass: {
            includePaths: {
                options: {
                    includePaths: ['usptostrap/sass', 'bower_components']
                }
            },
            dist:{
                options:  {
                    sourcemap:  'auto',
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'usptostrap/sass',
                    src: ['usptostrap.scss'],
                    dest: '<%= paths.downloads %>/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'front/styles',
                    src: ['pattern-library.scss'],
                    dest: '<%= paths.assets %>/styles',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'front/styles/appDemo',
                    src: ['appDemo.scss'],
                    dest: '<%= paths.assets %>/styles',
                    ext: '.min.css'
                }]
            }
        },


        // Add vendor prefixed styles to CSS
        autoprefixer: {
            options: {
                browsers: ['> 4%', 'last 4 versions']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.assets %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= paths.assets %>/styles/'
                }, {
                    expand: true,
                    cwd: '<%= paths.downloads %>/css/',
                    src: 'usptostrap.min.css',
                    dest: '<%= paths.downloads %>/css/'
                }]
            }
        },

        // Compress images
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'front/images',
                    src: '{,*/}*.{png,gif,jpeg,jpg}',
                    dest: '<%= paths.assets %>/images'
                }]
            }
        },

        // Bundle JS/CSS files
        concat: {
            // bootstrap plugins
            pluginsjs: {
                src: ['bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js'],
                dest: '<%= paths.assets %>/scripts/plugins.js'
            },
            // misc vendor
            vendorjs: {
                src: ['bower_components/jquery/dist/jquery.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.numeric.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.phone.extensions.js',
                    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.regex.extensions.js',
                    'bower_components/select2/select2.js',
                    'bower_components/nouislider/distribute/jquery.nouislider.all.min.js',
                    'bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js',
                    'front/vendor/jquery-ui-1.11.1.custom/jquery-ui.js'],
                dest: '<%= paths.assets %>/scripts/vendor.js'
            },
            // main js
            mainjs: {
                src: ['front/scripts/main.js'],
                dest: '<%= paths.assets %>/scripts/main.js'
            },
            // appDemo js
            appDemojs: {
                src: ['front/scripts/appDemo.js'],
                dest: '<%= paths.assets %>/scripts/appDemo.js'
            },
            // vendor css
            vendorcss: {
                src: [
                    'front/vendor/jquery-ui-1.11.1.custom/jquery-ui.structure.css',
                    'bower_components/font-awesome/css/font-awesome.css',
                    'bower_components/select2/select2.css',
                    'bower_components/nouislider/distribute/jquery.nouislider.min.css',
                    'bower_components/nouislider/distribute/jquery.nouislider.pips.min.css'
                ],
                dest: '<%= paths.assets %>/styles/vendor.css'
            },
            // main css
            maincss: {
                src: ['<%= paths.assets %>/styles/pattern-library.css'],
                dest: '<%= paths.assets %>/styles/main.css'
            }
        },

        // Add a banner to the top of the generated sass file.
        usebanner: {
            taskName: {
                options: {
                    position: 'top',
                    banner: '/* usptostrap v<%= config.version %> | <%= config.repository.url %> */\n\n',
                    linebreak: true
                },
                files: {
                    src: ['<%= paths.downloads %>/css/usptostrap.min.css'],
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{ // htmlshiv and matchMedia polyfill for <= IE9
                    dot: true,
                    expand: true,
                    cwd: 'front/vendor/',
                    src: ['html5shiv/*.*', 'matchMedia/*.*'],
                    dest: '<%= paths.assets %>/vendor/'
                }, { // icon sprite to assets folder
                    dot: true,
                    expand: true,
                    cwd: 'usptostrap/images/icons',
                    src: '*.svg',
                    dest: '<%= paths.assets %>/images/icons'
                }, { // favicon sprite to assets folder
                    dot: true,
                    expand: true,
                    cwd: 'front/',
                    src: 'favicon.ico',
                    dest: '<%= paths.assets %>/'
                }, { // copy vendor files
                    dot: true,
                    expand: true,
                    cwd: 'generated/styles',
                    src: 'vendor.css',
                    dest: '<%= paths.downloads %>/vendor'
                }, { // usptostrap src to downloads folder
                    dot: false,
                    expand: true,
                    cwd: 'usptostrap',
                    src: '**/*',
                    dest: '<%= paths.downloads %>/'
                }, { // minified css to downloads folders

                }]
            },
            release: {
                files: [{ // Do things for a full release
                    cwd: '_site/',
                    src: ['**/*', '!**/1.x/**'],
                    dest: '1.x/',
                    expand:true
                }]
            }
        },

        // Zips up src sass files, images, and minified css
        zip: {
            '<%= paths.downloads %>/usptostrap-<%= config.version %>.zip': ['<%= paths.downloads %>/**/*']
        },

        //Jekyll Tasks
        jekyll: {
            release : {
                options : {
                    config: '_config_release.yml'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'sasslint',
        'sass',
        'imagemin',
        'usebanner',
        'concat',
        'autoprefixer',
        'copy:dist',
        'zip'
    ]);

    // Use caution, this will overwrite files.
    //This will overwrite the 1x folder
    grunt.registerTask('doversionedrelease', [
        'clean:dist',
        'jshint',
        'sasslint',
        'sass',
        'imagemin',
        'usebanner',
        'concat',
        'autoprefixer',
        'copy:dist',
        'zip',
        'jekyll:release',
        'copy:release'

    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
