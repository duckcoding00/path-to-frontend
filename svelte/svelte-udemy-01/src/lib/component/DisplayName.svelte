<script lang="ts">
	let firstname: string = $state('Ardi');
	let lastname: string = $state('Sasongko');
	let fullname: string = $derived.by(() => {
		console.log('derived fullname');
		return `${firstname} ${lastname}`;
	});

	let username: string = $state('');
	let src: string = 'https://dummyimage.com/300';

	$effect(() => {
		if (username) {
			console.log('effect from username');
		} else if (fullname) {
			console.log('effect from fullname');
		}
	});
</script>

<img {src} alt="dummy" /> <br />
<!-- <h1>Hello {firstname}</h1> -->

<input bind:value={firstname} />
<input
	value={lastname}
	oninput={(e) => {
		lastname = e.currentTarget.value;
		console.log(fullname);
	}}
/>
<input bind:value={username} />

<h1>{username || fullname}</h1>
<button
	onclick={() => {
		console.log('accessed fullname', { fullname });
	}}>show fullname</button
>

<style>
	h1 {
		color: red;
	}
</style>
