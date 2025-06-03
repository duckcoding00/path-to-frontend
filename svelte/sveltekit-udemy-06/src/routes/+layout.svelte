<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import type { Snippet } from 'svelte';
	import type { ActionData } from './login/$types';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';
	let { children, form, data }: { children: Snippet; form: ActionData; data: LayoutData } =
		$props();
	let pages = page;
</script>

<nav>
	<a href="/">home</a>
	<a href="/login">login</a>
	<a href="/products">products</a>
</nav>

{#if pages.url.pathname !== '/login'}
	<section class="section">
		<div class="container">
			<form action={pages.url.pathname} method="GET">
				<input class="input is-normal" type="text" placeholder="search" name="q" />
			</form>
		</div>
	</section>
{/if}

{@render children()}

{#if data.cookie && pages.url.pathname !== '/login'}
	<section class="section">
		<div class="container">
			<form action="/login?/logout&redirectTo={pages.url.pathname}" method="POST" use:enhance>
				<button class="button is-danger">logout</button>
			</form>
		</div>
	</section>
{/if}

{#if !data.cookie && pages.url.pathname !== '/login'}
	<section class="section">
		<div class="container">
			<form action="/login?/login&redirectTo={pages.url.pathname}" method="POST">
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
{/if}
