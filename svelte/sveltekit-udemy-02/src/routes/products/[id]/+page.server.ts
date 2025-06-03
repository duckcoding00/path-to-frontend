import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`https://dummyjson.com/products/${+params.id}`);

	if (!response.ok) {
		throw error(response.status, 'failed load data product');
	}

	const product = await response.json();

	const comments = fetch(`https://dummyjson.com/comments`).then((res) => res.json());
	return {
		product,
		title: product.title,
		description: product.description,
		nested: {
			comments
		}
	};
};
