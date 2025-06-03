<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	let { data }: { data: LayoutData } = $props();
</script>

<h1>Home</h1>
<h2>{data.user?.name ? data.user?.name : ''}</h2>
