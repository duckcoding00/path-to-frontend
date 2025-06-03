import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	//console.log('client', data.products);
	return {
		products: data.products,
		title: 'products list'
	};
};
