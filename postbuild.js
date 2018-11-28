var version = require('./package.json').version
var path = require('path')
var dir = path.resolve('./dist/', version)
var fs = require('fs')

var html = fs.readdirSync(dir).filter(function(filename) {
	if (filename.slice(-5) === '.html') {
		return true
	}
})
if (html.length === 0) {
    return;
}
html.forEach(function(filename) {
	fs.unlinkSync(path.resolve(dir, filename))
})

var assetDir = path.resolve(dir, 'assets')

var cssDir = path.resolve(assetDir, 'css')
var css = fs.readdirSync(cssDir)
css.forEach(function(filename) {
	fs.renameSync(path.resolve(cssDir, filename), path.resolve(dir, filename))
})
fs.rmdirSync(cssDir);

var jsDir = path.resolve(assetDir, 'js')
var js = fs.readdirSync(jsDir)
js.forEach(function(filename) {
	fs.renameSync(path.resolve(jsDir, filename), path.resolve(dir, filename))
})
fs.rmdirSync(jsDir)

fs.rmdirSync(assetDir);
