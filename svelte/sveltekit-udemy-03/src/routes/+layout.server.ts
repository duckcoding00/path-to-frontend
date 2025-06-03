// import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	//throw error(401, 'not found');
	// const token = await cookies.get('token');

	const user = locals.user;

	// get locals data yang di set di hooks
	console.log(user?.name);
	return {
		user: user ? user : undefined
	};
};
