<script>
	export let name;
	let author = 'Sasha Pylypenko!'
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>The author is {author}</h2>
	<img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt=""/>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #2bae1f;
		text-transform: capitalize;
		font-size: 2em;
		font-weight: 100;
	}
	img{
		margin: 20px auto;
		width: 300px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>