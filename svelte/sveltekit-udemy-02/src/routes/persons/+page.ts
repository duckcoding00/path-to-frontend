import type { PageLoad } from './$types';

// load data client side
// bisa dikombinasikan dengan server side
// dimana returnya bisa dicustom dari server side
export const load: PageLoad = async ({
	data
	// url,
	// route,
	// params,
	// parent,
	// fetch,
	// depends,
	// setHeaders
}) => {
	// console.log(data);
	// console.log(url);
	// console.log(route);
	// console.log(params);
	// console.log(await parent());

	return {
		persons: data.persons.persons,
		title: 'person list 2'
	};
};
