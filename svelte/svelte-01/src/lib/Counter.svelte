<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    console.log(count)
    count++
  }

  let firstname: string = $state('')

  let person = $state.raw({
    firstname: "",
    lastname: ""
  })

  const sayhello = () => {
    person = {
      firstname:person.firstname,
      lastname:person.lastname
    }
  }
</script>

<h1>{count}</h1>
<button onclick={increment}>Click me</button>

<h2>state</h2>
<input type="text" bind:value={firstname}>
<h2>{firstname}</h2>

<br>
<h2>state raw</h2>
<input type="text" bind:value={person.firstname}>
<input type="text" bind:value={person.lastname}>

<button onclick={sayhello}>click me</button>
<h1>hello {person.firstname} {person.lastname}</h1>
