import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const user = {
		id: 1,
		name: 'jhon'
	};

	const token = cookies.get('token');

	return {
		user: token ? user : null
	};
};
