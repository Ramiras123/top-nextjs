export const API = {
	topPage: {
		find: process.env.NEXT_PUBLIC_DOMIAN + '/api/product/find',
		byAlias: process.env.NEXT_PUBLIC_DOMIAN + '/api/top-page/byAlias/'
	},
	product: {
		find: process.env.NEXT_PUBLIC_DOMIAN + '/api/top-page/find'
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_DOMIAN + '/api/review/create-demo'
	},
	process: process.env.NEXT_PUBLIC_DOMIAN
};
