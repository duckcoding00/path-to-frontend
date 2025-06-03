<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
</script>

<h1>About Page</h1>
<h2>some page</h2>

<a href="/">home</a>
<br />
<button
	onclick={() => {
		goto('/');
	}}>home</button
>
<br />
{JSON.stringify(page.params)}
