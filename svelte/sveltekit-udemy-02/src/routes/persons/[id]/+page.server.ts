import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const persons = await (await import('$lib/dummy-person.json')).default;

	const person = persons.persons.find((p) => p.id === +params.id);

	if (!person) {
		throw error(404, 'not found');
	}

	const description: string = `data from person ${person.firstName} ${person.lastName}`;
	return {
		person,
		title: person.firstName,
		description
	};
};
