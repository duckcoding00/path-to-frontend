<script>
	let array = $state([1, 2, 3, 4]);
	let objectArray = $state([{ id: 1 }, { id: 2 }, { id: 3 }]);
	let object = $state({
		firstname: 'Joko',
		lastname: 'Budiono',
		address: {
			street: 'jln x',
			city: 'cibubur'
		}
	});

	$effect(() => {
		console.log('object effect');
		$inspect(object);
	});
	$effect(() => {
		console.log('object firstname effect');
		$inspect(object.firstname);
	});
	$effect(() => {
		console.log('object address effect');
		$inspect(object.address);
	});
	$effect(() => {
		console.log('object address street effect');
		$inspect(object.address.street);
	});
	$effect(() => {
		console.log('array');
		$inspect(array);
	});
	$effect(() => {
		console.log('array length');
		console.log(array.length);
	});
</script>

<input type="text" bind:value={object.firstname} />
<input type="text" bind:value={object.address.street} />

<button
	onclick={() => {
		array.push(Math.random() * 10);
	}}>generate</button
>

<h1>{object.firstname}</h1>
<h1>{object.address.street}</h1>
<h1>{array}</h1>
