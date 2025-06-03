import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	parent
	// cookies,
	// getClientAddress,
	// locals,
	// platform
}) => {
	// const clientIp = getClientAddress();
	// console.log('client address:', clientIp.split('::ffff:')[1]);

	console.log('person loaded');
	const persons = await (await import('$lib/dummy-person.json')).default;
	//console.log(persons);

	const user = await parent();
	console.log('form layout', user.user?.name);
	return {
		persons,
		user
	};
};
