<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="prose mx-auto">
	{#if post.coverImage?.url}
		<div class="mb-10">
			<img src={post.coverImage.url} alt={`Cover Image for ${post.title}`} />
		</div>
	{:else}
		<div class="mb-10">
			<img src={`/img/default-cover-image.jpg`} alt={`Default Cover Image`} />
		</div>
	{/if}
	<h1 class="text-4xl font-semibold">{post.title}</h1>

	<div class="grid sm:flex sm:justify-between items-center bg-accent text-gray-900 p-5">
		<a href={'/'} class="inline-flex items-center gap-2">
			<img
				src={post.author?.picture.url ? post.author?.picture.url : `/img/default-profile.png`}
				alt={post.author?.name}
				class="rounded-full object-cover object-center"
			/>
			<span class="grid">
				<span class="title-font font-medium">{post.author?.name ? post.author.name : `anon`}</span>
				{#if post.author?.authorTitle}
					<span class="text-secondary text-xs tracking-widest font-semibold"
						>{post.author?.authorTitle}</span
					>
				{/if}
			</span>
		</a>
		<div class="grid grid-cols-1 sm:justify-items-end">
			<span class="flex justify-between">
				{new Date(post.date).toDateString()}
			</span>

			<div class="flex justify-between">
				<div>
					{#if post.tags}
						{#each post.tags as tag}
							<span class="badge badge-primary mr-2">{tag}</span>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
	<section>
		{@html post.content.html}
	</section>
</article>

<script context="module">
	export async function load({ fetch, page: { params } }) {
		const { slug } = params;
		const res = await fetch(`/posts/${slug}.json`);
		if (res.ok) {
			const post = await res.json();
			return {
				props: post
			};
		}
	}
</script>

<script>
	export let post;
	const title = post.title;
</script>
