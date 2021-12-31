<script>
  export let title = 'Dashboard!';

  ////// PART REACTIVITY
  let count = 0;
  $: doubled = count * 2;
  $: if ((doubled >= 10) & count) {
    alert(`Points value is dangerously big, you lose!`);
    count = 0;
    doubled = 0;
  }

  function incrementCount() {
    count += 1;
  }
  ///////////////////

  let name = 'Sasha';
  let surname = 'Pylypenko';
  $: fullName = name + surname;

  //////////////////

  let numbers = [1, 2, 3, 4, 5];
  $: sum = numbers.reduce((acc, i) => acc + i, 0);

  function addNumber() {
    // numbers.push(numbers.length + 1); won't work because Svelte's reactivity is triggered by assignmentst numbers = [...numbers]
    numbers = [...numbers, numbers.length + 1];
  }

  ////////// PART LOGIC

  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }

  ///////////
  import StyleItem from './StyledItem.svelte';
  let data = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];
  let things = [...data];

  function handleClick() {
    if (things.length !== 0) {
      things = things.slice(1);
    } else {
      things = [...data];
    }
  }
</script>

<div class="wrapper">
  <h2>{title}</h2>
  <button on:click={incrementCount}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
  <p>{count} doubled is {doubled}</p>
  <p>{fullName} - points {doubled}</p>
  <hr />
  <p>{numbers.join(' + ')} = {sum}</p>
  <button on:click={addNumber}> Add a number </button>
  <hr />
  {#if user.loggedIn}
    <button class="login-button" on:click={toggle}> Log out </button>
  {:else}
    <button class="login-button" on:click={toggle}> Log in </button>
  {/if}
  <hr />
  <button on:click={handleClick}> Remove first thing </button>

  {#each things as thing (thing.id)}
    <StyleItem name={thing.name} />
  {/each}
</div>

<style lang="scss">
  .wrapper {
    height: 100vh;
    padding: 20px;
    background-color: #b3b2b34f;
  }
  hr {
    margin: 10px 0;
    background: darkgray;
  }
  .login-button {
    position: fixed;
    right: 30px;
    top: 30px;
    background: purple;
    color: white;
    border: 0;
    border-radius: 5px;
    padding: 10px;
  }
</style>
