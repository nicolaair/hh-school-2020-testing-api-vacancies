import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from "rollup-plugin-typescript2"

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/main.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		json(),
		typescript()
	]
}
