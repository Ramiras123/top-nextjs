/** @type {import('next').NextConfig} */
module.exports = {
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				issuer: /\.[jt]sx?&/,
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false
								}
							}
						}
					]
				},
				titleProp: true
			},
			test: /\.svg$/
		});

		return config;
	}
};
