import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/products/?limit=10');

	const data = await response.json();
	// console.log('server', data);
	return {
		products: data.products
	};
};
