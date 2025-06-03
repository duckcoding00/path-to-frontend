import { error, json, type RequestHandler } from '@sveltejs/kit';

// handle get request
export const GET: RequestHandler = async ({ fetch }) => {
	//const persons = await (await import('$lib/dummy-person.json')).default;

	// fetch
	const products = await fetch('https://dummyjson.com/products/?limit=10');

	if (products.ok) {
		const resp = await products.json();
		return json(resp, {
			status: 200
		});
	}

	throw error(products.status, 'Failed to fetch products');
};

// handle post request from body
export const POST: RequestHandler = async ({ request }) => {
	const person = await request.json();

	if (!person.name) {
		throw error(400, 'name is required');
	}

	return json(
		{
			name: person.name,
			id: 123
		},
		{
			status: 200
		}
	);
};
