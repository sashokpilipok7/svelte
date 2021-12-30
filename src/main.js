import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    author: 'Sasha Pylypenko!',
  },
});

export default app;
