<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="text-3xl font-bold title text-center my-12">{title}</h1>
<ul class="grid gap-10 justify-center grid-cols-fit">
	{#each posts as post}
		<a
			sveltekit:prefetch
			href={`/posts/${post.slug}`}
			class="card bg-gray-800 text-center shadow-2xl transition-colors hover:shadow-md hover:bg-gray-900"
		>
			<li>
				<figure>
					{#if post.coverImage.url}
						<img
							class="rounded-y-xl"
							src={post.coverImage.url}
							alt={`Cover image for ${post.title}`}
						/>
					{:else}
						<img src="/img/default-cover-image.jpg" alt={`Cover image for ${post.title}`} />
					{/if}
				</figure>
				<div class="py-5 px-3">
					<h2 class="title font-bold text-2xl">{post.title}</h2>
					<p class="mb-2">{post.excerpt}</p>
					{#if post.tags}
						<ul>
							{#each post.tags as tag}
								<li class="badge badge-primary">{tag}</li>
							{/each}
						</ul>
					{/if}
				</div>
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
