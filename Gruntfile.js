module.exports = function(grunt){
	grunt.initConfig({
		shell : {
			launchExpress : {
				command: 'node app.js'
			}
		},
		watch : {
			css : {
				options : {livereload:true},
				files: ['style/**.css'],
				tasks: [/*preprocessing*/'concat:css']
			},
			html : {
				options : {livereload:true},
				files: ['views/**.html'],
			},
			js : {
				options : {livereload:true},
				files: ['scripts/**.js'],
				tasks: ['jshint:all','concat:js']
			}
		},
		concat : {
			js : {
				src : ["scripts/**.js"],
				dest : "dist/app.js"
			},
			css : {
				src : ["style/**.css"],
				dest : "dist/app.css"
			}
		},
		uglify : {
			js : {
				src : ['dist/app.js'],
				dest : 'dist/app.js'
			}
		},
		jshint  : {
			all : ['Gruntfile.js', 'scripts/**/*.js']
		},
		clean : {
			dist : 'dist'
		},
		open : {
			dev : {
				path: "http://localhost:3000",
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-open');
	//production
	grunt.registerTask('prod', ['clean:dist','jshint','concat','uglify']);
	//dev
	grunt.registerTask('default', ['shell:launchExpress']);
	grunt.registerTask('dev', ['open:dev', 'watch']);
};