var version = require('./package.json').version
module.exports = {
    outDir: './dist/' + version,
	pages: {
		addstrap: {
			entry: './src/addstrap.js',
		},
		'cs_addstrap': {
			entry: './src/cs_addstrap.js',
        },
        'dashcs_addstrap': {
			entry: './src/dashcs_addstrap.js',
		},
    },
    filenameHash: false,
}
