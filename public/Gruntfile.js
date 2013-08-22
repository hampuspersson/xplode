'use strict';
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			js: {
				files: '<%= jshint.all %>',
				tasks: ['jshint', 'uglify:main']
			},
			scss: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass:dev']
			},
			livereload: {
				options: { livereload: true },
				files: ['assets/css/style.css', 'assets/javascripts/*.js', '*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {                         // Dictionary of files
					'build/assets/css/style.css': 'assets/scss/style.scss',       // 'destination': 'source'
				}
			},

			dev: {                             // Another target
				options: {                       // Target options
				style: 'expanded',
				sourcemap: 'map/style.css.map'
			},
				files: {
					'assets/css/style.css': 'assets/scss/style.scss',
				}
			}
		},

		// javascript linting with jshint
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				"force": true
			},
			all: [
				'Gruntfile.js',
				'assets/javascripts/source/**/*.js'
			]
		},

		// uglify to concat, minify, and make source maps
		uglify: {
			main: {
				options: {
					sourceMap: 'assets/javascripts/map/source-map-main.js',
					sourceMapRoot: 'assets/javascripts/soruce/',
					sourceMappingURL: 'map/source-map-main.js',
					mangle: false
				},
				files: {
					'assets/javascripts/main.min.js': [
						'assets/javascripts/source/main.js',
						'assets/javascripts/source/app/factories.js',
						'assets/javascripts/source/app/controllers.js'
					]
				}
			},

			dist: {
				options: {
					mangle: false
				},
				files: {
					'build/assets/javascripts/main.min.js': [
						'assets/javascripts/source/main.js'
					]
				}
			}
		},

		// image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 7,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: 'build/assets/images/',
					src: '**/*',
					dest: 'build/assets/images/'
				}]
			}
		},

		'ftp-deploy': {
			dist: {
				auth: {
					host: '',
					port: 21,
					authKey: 'key1' // key1 is set in .ftppass
				},
				src: 'build/',
				dest: '',
			}
		},


		copy: {
			dist: {
				files: [
					{expand: true, src: [
								'**/*', // All files and folder
								'!build', '!assets/**/*', '!node_modules', '!node_modules/**/*', //except these dirs
								'!Gruntfile.js', '!package.json' ], // and these files
								dest: 'build/'},
					{expand: true, src: [ 'assets/fonts/*' ], dest: 'build/'},
					{expand: true, src: [ 'assets/images/**/*' ], dest: 'build/'}
				]
			}
		}

	});

	// register task
	grunt.registerTask('default', ['watch']);

	grunt.registerTask('build', [ 'copy:dist', 'sass:dist', 'uglify:dist' ]);
	grunt.registerTask('upload', [ 'ftp-deploy:dist' ]);

};