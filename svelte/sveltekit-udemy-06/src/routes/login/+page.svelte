<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let pages = $state(page);
</script>

<section class="section">
	<div class="container">
		<h1 class="title is-size-6">Login Page</h1>
	</div>
</section>
<section class="section">
	<div class="container">
		<form action="?/login" method="post" use:enhance>
			<div class="field">
				{#if form?.username_missing}
					<p class="has-text-danger">username is required</p>
				{:else}
					<label for="username" class="label">username</label>
				{/if}
				<div class="control">
					<input
						type="text"
						class="input"
						id="username"
						name="username"
						placeholder="username"
						value={form?.username || ''}
					/>
				</div>
			</div>
			<div class="field">
				{#if form?.password_missing}
					<p class="has-text-danger">password is required</p>
				{:else}
					<label for="password" class="label">password</label>
				{/if}
				<div class="control">
					<input
						type="password"
						class="input"
						id="password"
						name="password"
						placeholder="password"
						value={form?.password || ''}
					/>
				</div>
			</div>

			<div class="control">
				<button class="button" type="submit">login</button>
			</div>
		</form>
	</div>
</section>
