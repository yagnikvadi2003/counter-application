module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["prettier", "react", "react-hooks", "@typescript-eslint", "react-refresh"],
	settings: {
		"import/resolver": {
			typescript: {
				project: "./tsconfig.json",
			},
		},
		react: {
			version: "18.x",
		},
	},
	rules: {
		eqeqeq: ["error", "always"],
		"react-refresh/only-export-components": "warn",
		semi: ["error", "always"],
		"jsx-quotes": ["error", "prefer-double"],
		quotes: ["error", "double"],
		"no-extra-semi": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-eq-null": "error",
		"no-extra-semi": "error",
		"no-redeclare": "error",
		"no-var": "error",
		"multiline-comment-style": ["error", "starred-block"],
		"no-console": [
			"error",
			{
				allow: ["warn", "error"],
			},
		],
		"no-warning-comments": [
			"error",
			{
				decoration: ["/", "*"],
			},
		],
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".tsx"],
			},
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-uses-react": "off",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/typedef": [
			"error",
			{
				parameter: true,
				propertyDeclaration: true,
			},
		],
	},
};
