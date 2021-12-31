<script>
    export let text = '0'; // set 0 as default value
</script>

<div>{text}</div>

<style>
    div{
  height: 40px;
  width: 40px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0 background-color;
  }
    div:hover {
    transition-delay: 0.08s;
    background-color: lightblue;
  }
</style>