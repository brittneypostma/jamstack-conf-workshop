<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="text-3xl font-bold title text-center">{title}</h1>
<ul class="grid grid-cols-1 gap-8 grid-cols-fit">
	{#each posts as post}
		<a
			href={`/posts/${post.slug}`}
			class="card text-center shadow-2xl transition-colors hover:shadow-md hover:bg-gray-900"
		>
			<li>
				<figure class="px-10 pt-10">
					{#if post.coverImage.url}
						<img
							class="rounded-xl"
							src={post.coverImage.url}
							alt={`Cover image for ${post.title}`}
						/>
					{:else}
						<img src="/img/default-cover-image.jpg" alt={`Cover image for ${post.title}`} />
					{/if}
				</figure>
				<h2 class="title font-bold text-2xl mb-2">{post.title}</h2>
				<p class="mb-2">{post.excerpt}</p>
				{#if post.tags}
					<ul>
						{#each post.tags as tag}
							<li class="badge badge-primary mb-2">{tag}</li>
						{/each}
					</ul>
				{/if}
			</li>
		</a>
	{/each}
</ul>

<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/posts.json');
		if (res.ok) {
			const posts = await res.json();
			return {
				props: posts
			};
		}
	}
</script>

<script>
	export let posts;
	const title = `Jamstack Conf Blog`;
</script>
