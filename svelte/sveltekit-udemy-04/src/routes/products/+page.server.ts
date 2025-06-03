import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/products/?limit=10');

	if (!response.ok) {
		throw error(response.status, 'failed get products');
	}

	const data = await response.json();
	//console.log(data);
	return {
		products: data.products
	};
};
