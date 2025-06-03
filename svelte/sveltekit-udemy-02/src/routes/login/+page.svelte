<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import type { Snapshot } from '../$types';
	import '../../app.css';

	let username = $state('');
	let password = $state('');

	// using snapshot for temp data
	export const snapshot: Snapshot = {
		capture: () => {
			return {
				username,
				password
			};
		},
		restore: (v) => {
			(username = v.username), (password = v.password);
		}
	};

	const login = async (e: SubmitEvent) => {
		e.preventDefault();

		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});

		const resJson = await response.json();
		if (response.ok) {
			// goto('/', {
			// 	invalidateAll: true
			// });
			// use this for reload all
			invalidateAll();
		} else {
			alert(resJson.message);
		}
	};
</script>

<section class="section">
	<div class="container">
		<div class="box">
			<form onsubmit={login}>
				<div class="field">
					<label for="username" class="label">username</label>
					<div class="control">
						<input
							type="text"
							class="input"
							placeholder="username"
							id="username"
							bind:value={username}
							name="username"
						/>
					</div>
				</div>
				<div class="field">
					<label for="password" class="label">password</label>
					<div class="control">
						<input
							type="password"
							class="input"
							placeholder="password"
							id="password"
							bind:value={password}
							name="password"
						/>
					</div>
				</div>

				<div class="control">
					<button class="button" type="submit">login</button>
				</div>
			</form>
		</div>
	</div>
</section>
