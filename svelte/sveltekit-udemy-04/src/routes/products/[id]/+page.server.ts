import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params.id);
	const response = await fetch(`https://dummyjson.com/products/${params.id}`);
	if (!response.ok) {
		throw error(response.status, 'NOT FOUND');
	}

	const data = await response.json();
	console.log(data);
	return {
		product: data
	};
};
