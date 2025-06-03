<script lang="ts">
  import { counter } from "../state/GlobalState.svelte";

    const incremnet = () => {
        counter.count++
    }
</script>

<button onclick={incremnet}>click</button>
<h2>{counter.count}</h2>