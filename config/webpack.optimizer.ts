import {Options} from "webpack";
const TerserPlugin = require('terser-webpack-plugin'); 

let opti : Options.Optimization = {};

opti = {
	minimizer: [
		new TerserPlugin({
			terserOptions: {
				compress: {
					drop_console: true, 
					unsafe: true 
				},
				output: {comments: false}, 
			}
		})
	]
};

export {opti};