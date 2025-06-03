import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, cookies, url }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		const path = url.searchParams.get('redirectTo') || '/';
		console.log(path);

		if (!username) {
			return fail(400, {
				username_missing: true,
				password
			});
		}

		if (!password) {
			return fail(400, {
				password_missing: true,
				username
			});
		}

		cookies.set('token', 'some_token', {
			path: '/'
		});

		throw redirect(303, path === '/login' ? '/' : path);
	},

	logout: ({ cookies, url }) => {
		cookies.delete('token', {
			path: '/'
		});

		const path = url.searchParams.get('redirectTo') || '/';

		throw redirect(303, path === '/login' ? '/' : path);
	}
};
