module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		project: "./tsconfig.json",
	},
	plugins: [
		"prettier",
		"react",
		"react-hooks",
		"@typescript-eslint",
		"react-refresh",
		"simple-import-sort",
		"import",
	],
	settings: {
		react: {
			version: "18.x",
		},
		typescript: {
			version: "5.x",
		},
	},
	rules: {
		eqeqeq: ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"react/prop-types": [2],
		"react-refresh/only-export-components": "warn",
		"import/first": "error",
		"import/no-duplicates": "error",
		"import/newline-after-import": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
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
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/typedef": [
			"error",
			{
				parameter: true,
				propertyDeclaration: true,
			},
		],
	},
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
			rules: {
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// Packages `react` related packages come first.
							["^react", "^@?\\w"],
							// Internal packages.
							["^(@|components)(/.*|$)"],
							// Side effect imports.
							["^\\u0000"],
							// Parent imports. Put `..` last.
							["^\\.\\.(?!/?$)", "^\\.\\./?$"],
							// Other relative imports. Put same-folder imports and `.` last.
							["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
							// Style imports.
							["^.+\\.?(css)$"],
						],
					},
				],
			},
		},
	],
	ignorePatterns: ["node_modules", "build", "dist", "public"],
};
