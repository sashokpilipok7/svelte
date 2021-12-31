<script>
import { add_flush_callback } from "svelte/internal";


    let count = 0;
    $: doubled = count * 2;
    $: if(doubled >= 10 & count){
        alert(`Points value is dangerously big, you lose!`);
        count = 0;
        doubled = 0;
    }

    function incrementCount() {
    count += 1;
    }


    let name = 'Sasha';
    let surname = 'Pylypenko';
    $: fullName = name + surname;
</script>

<div class="wrapper">
    <h2>Dashboard</h2>
    <button on:click={incrementCount}>
	    Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
    <p>{count} doubled is {doubled}</p>
    <p>{fullName} - points {doubled}</p>
</div>

<style lang="scss">
    .wrapper{
        height: 100vh;
        padding: 20px;
        background-color: #c4c4c4;
    }
</style>