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
				files: 'public/assets/scss/**/*.scss',
				tasks: ['sass:dev']
			},
			livereload: {
				options: { livereload: true },
				files: ['public/assets/css/style.css', 'public/assets/javascripts/*.js', 'public/*.html', 'public/partials/*.html', 'public/*.php', 'app/views/*.php', 'public/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {                         // Dictionary of files
					'build/public/assets/css/style.css': 'public/assets/scss/style.scss',       // 'destination': 'source'
				}
			},

			dev: {                             // Another target
				options: {                       // Target options
				style: 'expanded',
				sourcemap: 'map/style.css.map'
			},
				files: {
					'public/assets/css/style.css': 'public/assets/scss/style.scss',
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
				'public/assets/javascripts/source/**/*.js'
			]
		},

		// uglify to concat, minify, and make source maps
		uglify: {
			main: {
				options: {
					sourceMap: 'public/assets/javascripts/map/source-map-main.js',
					sourceMapRoot: 'public/assets/javascripts/soruce/',
					sourceMappingURL: 'map/source-map-main.js',
					mangle: false
				},
				files: {
					'public/assets/javascripts/main.min.js': [
						'public/assets/javascripts/source/main.js',
						'public/assets/javascripts/source/app/directives.js',
						'public/assets/javascripts/source/app/animations.js',
						'public/assets/javascripts/source/app/factories.js',
						'public/assets/javascripts/source/app/controllers.js'
					]
				}
			},

			dist: {
				options: {
					mangle: false
				},
				files: {
					'build/public/assets/javascripts/main.min.js': [
						'public/assets/javascripts/source/main.js',
						'public/assets/javascripts/source/app/directives.js',
						'public/assets/javascripts/source/app/animations.js',
						'public/assets/javascripts/source/app/factories.js',
						'public/assets/javascripts/source/app/controllers.js'
					],
					'build/public/assets/javascripts/vendors.min.js': [
						'public/assets/components/angular-resource/angular-resource.min.js',
						'public/assets/components/angular-route/angular-route.min.js',
						'public/assets/components/angular-cookies/angular-cookies.min.js',
						'public/assets/components/Angular-localStorage/src/localStorage.js',
						/*'public/assets/components/fastclick/lib/fastclick.min.js'*/
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
					host: 'ftp.hampuspersson.se',
					port: 21,
					authKey: 'key1' // key1 is set in .ftppass
				},
				src: 'build/',
				dest: 'xplode',
			}
		},


		copy: {
			dist: {
				files: [
					{
						expand: true,
						src: [
							// All files and folder
							'**/*',

							// except these dirs
							'!build',
							'!build/**/*',
							'!bootstrap',
							'!bootstrap/**/*',
							'!public/assets/',
							'!public/assets/**/*',
							'!node_modules',
							'!node_modules/**/*',
							'!vendor',
							'!vendor/**/*',
							'!app/storage',
							'!app/storage/**/*',
							'!app/database',
							'!app/database/**/*',
							'!app/commands',
							'!app/commands/**/*',
							'!app/config',
							'!app/config/**/*',
							'!app/lang',
							'!app/lang/**/*',
							'!app/start',
							'!app/start/**/*',
							'!app/tests',
							'!app/tests/**/*',

							// and these files
							'!Gruntfile.js',
							'!index.php',
							'!server.php',
							'!package.json',
							'!composer.*',
							'!artisan',
							'!phpunit.xml',
							'!readme.md',
							'!public/bower.json',
							'!public/favicon.ico'
						],
						dest: 'build/'
					},
					{expand: true, src: [ 'public/assets/font/*' ], dest: 'build/'},
					{expand: true, src: [ 'public/assets/images/**/*' ], dest: 'build/'}
				]
			}
		}

	});

	// register task
	grunt.registerTask('default', ['watch']);

	grunt.registerTask('build', [ 'copy:dist', 'sass:dist', 'uglify:dist' ]);
	grunt.registerTask('upload', [ 'ftp-deploy:dist' ]);

};