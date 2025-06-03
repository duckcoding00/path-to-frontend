<script lang="ts">
    let count: number = $state(0)
    let interval: number = $state(1000)

    function increment() {
        interval += 1000
    }

    $effect(() => {
        const id = setInterval(() => {
            count += 1;
        }, interval)

        return () => clearInterval(id)
    })
</script>

<h1>{count}</h1>
<button onclick={increment}>interval: {interval}</button>