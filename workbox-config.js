module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,json,xml,ico,html,txt,svg,js,webmanifest,css}'
	],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};