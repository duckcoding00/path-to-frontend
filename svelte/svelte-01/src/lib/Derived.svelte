<script lang="ts">
    // derived digunakan untuk pure function yang terkait dengan state lainya
    let count: Array<number> = $state([]);
    //let total: number = $derived(count.reduce((a,b) => a+b,0))

    let total: number = $derived.by(() => {
        let total:number = 0
        count.forEach((v) => {
            total +=v;
        })
        return total
    })

    // push only 1
    function valuePush(){
        count.push(1)
        
    }

    // untuk melakukan debugging -> only development stage
    $inspect(count).with((type,values) => {
        console.log(type, values)
    })
</script>

<h1>{count.join(" + ")}= {total}</h1>
<button onclick={valuePush}>push</button>