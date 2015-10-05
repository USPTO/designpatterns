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
            less: {
                files: ['usptostrap/less/**/*.less', 'front/styles/**/*.less'],
                tasks: ['less', 'usebanner', 'concat:maincss', 'autoprefixer']
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

        // Lint LESS
        lesslint: {
            src: ['usptostrap/less/**/*.less', 'front/styles/**/*.less'],
            options: {
                csslint: {
                    'box-model': false,
                    'adjoining-classes': false,
                    'qualified-headings': false,
                    'empty-rules': false,
                    'outline-none': false,
                    'unique-headings': false
                }
            }
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

        // LESS -> CSS
        less: {
            options: {
                paths: ['usptostrap/less', 'bower_components'],
                compress: true
                //sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'usptostrap/less',
                    src: ['usptostrap.less'],
                    dest: '<%= paths.downloads %>/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'front/styles',
                    src: ['pattern-library.less'],
                    dest: '<%= paths.assets %>/styles',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'front/styles/appDemo',
                    src: ['appDemo.less'],
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
                    dest: '<%= paths.downloads %>/css/',
                }]
            }
        },

        // Compress images
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'front/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= paths.assets %>/images'
                }]
            }
        },

        // Bundle JS/CSS files
        concat: {
            // bootstrap plugins
            pluginsjs: {
                src: ['bower_components/bootstrap/js/affix.js',
                    'bower_components/bootstrap/js/alert.js',
                    'bower_components/bootstrap/js/dropdown.js',
                    'bower_components/bootstrap/js/tooltip.js',
                    'bower_components/bootstrap/js/modal.js',
                    'bower_components/bootstrap/js/transition.js',
                    'bower_components/bootstrap/js/button.js',
                    'bower_components/bootstrap/js/popover.js',
                    'bower_components/bootstrap/js/carousel.js',
                    'bower_components/bootstrap/js/scrollspy.js',
                    'bower_components/bootstrap/js/collapse.js',
                    'bower_components/bootstrap/js/tab.js',],
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

        // Add a banner to the top of the generated LESS file.
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
                files: [{ // htmlshiv to assets for < IE9
                    dot: true,
                    expand: true,
                    cwd: 'front/vendor/html5shiv/',
                    src: ['html5shiv.min.js'],
                    dest: '<%= paths.assets %>/vendor/html5shiv/'
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
                }, { // usptostrap src to downloads folder
                    dot: false,
                    expand: true,
                    cwd: 'usptostrap',
                    src: '**/*',
                    dest: '<%= paths.downloads %>/'
                }, { // minified css to downloads folders

                }]
            }
        },

        // Zips up src less files, images, and minified css
        zip: {
            '<%= paths.downloads %>/usptostrap-<%= config.version %>.zip': ['<%= paths.downloads %>/**/*']
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'less',
        'imagemin',
        'usebanner',
        'concat',
        'autoprefixer',
        'copy:dist',
        'zip'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
