import type { Action } from 'svelte/action';
import tippyjs, { type Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export const tippy: Action<HTMLElement, () => Partial<Props>> = (node, getOptions) => {
	const tooltip = tippyjs(node, getOptions());

	// for update content
	$effect(() => {
		tooltip.setProps(getOptions());
	});

	// for destroy
	$effect(() => {
		return () => {
			tooltip.destroy();
		};
	});
};
