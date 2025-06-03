import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/products');

	const products = await response.json();
	if (!response.ok) {
		throw error(response.status, products.message);
	}

	//console.log(products);
	return {
		products
	};
};
