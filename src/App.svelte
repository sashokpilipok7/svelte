<script>
  import Square from './components/Square.svelte';
  import Dashboard from './components/Dashboard.svelte';

  export const author = 'Sasha Pylypenko!';
  let name = prompt('Enter your name please') || 'Guest';

  const size = 5;
  let data = makeField(size);
  function makeField(size) {
    let body = [];

    for (let i = 1; i <= size; i++) {
      body.push([]);
      for (let j = 1; j <= size; j++) {
        body[i - 1].push({ row: i, col: j });
      }
    }
    return body;
  }
</script>

<main>
  <section class="section">
    <h1>Hello {name}!</h1>
    <h2>The author is {author}</h2>
    <img
      src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
      alt=""
    />
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  </section>
  <section class="section section__playground">
    {#each data as item, idx}
      <div key={idx}>
        {#each item as i, idx}
          <Square
            key={idx}
            {size}
            data-col={i.col}
            data-row={i.row}
            text={i.col}
          />
        {/each}
      </div>
    {/each}
  </section>
  <section class="section">
    <Dashboard />
  </section>
</main>

<style lang="scss">
  .section {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    height: 100vh;
    &__playground {
      display: flex;
      max-width: max-content;
      margin: 20px auto;
    }
    @media (min-width: 640px) {
      max-width: none;
      &__playground {
        max-width: max-content;
      }
    }
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
  img {
    margin: 20px auto;
    width: 300px;
  }
</style>
