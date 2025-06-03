import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.set('token', 'some_token', {
		path: '/'
	});

	return json({ success: true });
};

export const DELETE: RequestHandler = async ({ cookies }) => {
	cookies.delete('token', {
		path: '/'
	});

	return json({ success: true });
};
