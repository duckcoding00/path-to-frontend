<script lang="ts">
    import UserRow from "./UserRow.svelte";

    // pakai spread opearator
    const user = {
        id: 2,
        name: "budi",
        age: 30
    }
</script>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
        </tr>
    </thead>
    <tbody>
        <UserRow id="1" name="joko" age="25"/>
        <UserRow id="1" name="joko" age="25"/>
        <UserRow {...user} />
    </tbody>
</table>