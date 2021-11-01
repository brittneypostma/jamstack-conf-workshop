{JSON.stringify(posts)}

<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/posts.json');
		if (res.ok) {
			const posts = await res.json();
			return {
				props: {
					posts
				}
			};
		}
	}
</script>

<script>
	export let posts;
</script>
