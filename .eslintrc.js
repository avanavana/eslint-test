module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true
	},
	extends: [
		'./config/eslint/index.js'
	],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
	plugins: [],
	ignorePatterns: ['!.*', 'dist', 'node_modules', 'patches'],
	rules: {}
};
