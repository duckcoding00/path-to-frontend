import type { Handle, HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { locals, cookies } = event;

	const token = cookies.get('token');
	//console.log(token);

	// set to locals
	locals.user = token ? { name: 'joko', id: 1 } : undefined;
	const response = await resolve(event);

	return response;
};

export const chromeError: Handle = ({ event, resolve }) => {
	if (event.url.pathname.includes('.well-known/appspecific')) {
		return new Response('{}', {
			status: 200,
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	return resolve(event);
};

// multiple handle
export const handle = sequence(handle1, chromeError);

//handle fetch hooks
export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
	if (request.url.startsWith('https://dummyjson.com/products')) {
		const cookie = event.request.headers.get('cookie');
		console.log(cookie);
		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}
	return fetch(request);
};
