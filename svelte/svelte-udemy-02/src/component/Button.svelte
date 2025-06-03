<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let isLeftHovered: boolean = $state(false);

	let button: HTMLButtonElement;

	// extend
	type Props = HTMLButtonAttributes & {
		left?: Snippet<[boolean]>;
		right?: Snippet;
		children: Snippet;
		btnType?: 'is-dark' | 'is-primary' | 'is-danger';
		customEvent?: () => void;
	};

	let { left, right, btnType = 'is-primary', children, customEvent, ...props }: Props = $props();

	export function focus() {
		button.focus();
	}
</script>

<div class="m-4">
	{isLeftHovered} <br />
	<button bind:this={button} class="button {btnType}" {...props}>
		{#if left}
			<div
				role="presentation"
				class="icon mr-2 left-icon"
				onmouseenter={() => {
					customEvent?.(); // custom event
					isLeftHovered = true;
				}}
				onmouseleave={() => {
					isLeftHovered = false;
				}}
			>
				{@render left(isLeftHovered)}
			</div>
		{/if}
		{@render children()}
		{#if right}
			<div class="icon ml-2">
				{@render right()}
			</div>
		{/if}
	</button>
</div>

<style>
	/* akses global css */
	:global {
		.left-icon {
			svg {
				stroke: white;
			}
		}
	}
</style>
