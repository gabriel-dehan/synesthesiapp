<template>
  <div id="app">
    <Synesthesiapp />
  </div>
</template>

<script>
import Synesthesiapp from './components/Synesthesiapp.vue'

export default {
  name: 'app',
  components: {
    Synesthesiapp
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

button {
  color: white;
  background: black;
  padding: 0.8em 1.2em;
  border-radius: 3px;
  font-size: inherit;
  cursor: pointer;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

button:hover {
  background: white;
  color: black;
  border: 1px solid black;
}
</style>
