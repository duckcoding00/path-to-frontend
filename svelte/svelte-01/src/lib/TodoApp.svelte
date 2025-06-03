<script lang="ts">
    import Todo from "./Todo.svelte";

    let data = $state([
        {
            id: 1,
            name: "belajar javascript",
        },
        {
            id: 2,
            name: "belajar html",
        },
        {
            id: 3,
            name: "belajar css",
        },
        {
            id: 4,
            name: "belajar svelte",
        },
    ]);
    let newTodoName = $state('');

    function submit(e: Event) {
        e.preventDefault();
        
        if (newTodoName.trim()) {
            data = [
                ...data,
                {
                    id: data.length + 1,
                    name: newTodoName,
                }
            ];
            
            newTodoName = '';
        }
    }

    function remove(id: number) {
        data = data.filter((todo) => todo.id !== id);
    }
</script>

<form onsubmit={submit}>
    <input bind:value={newTodoName} placeholder="Add new todo">
    <button type="submit">Add</button>
</form>

<ul>
    <!-- menggunakan each untuk array -->
    {#each data as item (item.id)}
        <li>
            <Todo {...item}/>
            <button onclick={() => remove(item.id)}>Remove</button>
        </li>
    {/each}
</ul>