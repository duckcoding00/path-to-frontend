<script lang="ts">
    interface Article {
        id: string;
        title: string;
        content: string;
    }

    async function getArticles(): Promise<Article[]> {
        const response = await fetch("/article.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        return await response.json();
    }
</script>

{#await getArticles()}
    <p>loading...</p>
{:then articles} 
    {#each articles as article}
        <article>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </article>
    {/each}
{:catch error}
    <h1>{error.message}</h1>
{/await}

<style>
    article {
        margin-bottom: 2rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;
    }
</style>