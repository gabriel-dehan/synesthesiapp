<template>
  <div class="synesthesiapp">

    <div v-if="type">
      <mechanical-orange v-if="type" v-bind="dataSet"></mechanical-orange>
    </div>
    <div v-else>
      <h1>Synesthesiapp</h1>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>
    </div>

  </div>
</template>

<script>
import MechanicalOrange from './MechanicalOrange.vue'

export default {
  name: 'Synesthesiapp',
  methods: {
    setNumbers() {
      this.type = 'numbers';
    },
    setLetters() {
      this.type = 'letters';
    }
  },
  data: () => {
    return {
      type: null,
      datasets: {
        numbers: [
          { character: 0, color: 'rgb(255, 255, 255)' },
          { character: 1, color: 'rgb(255, 220, 0)' },
          { character: 2, color: 'rgb(0, 129, 255)' },
          { character: 3, color: 'rgb(149, 255, 0)' },
          { character: 4, color: 'rgb(12, 66, 130)' },
          { character: 5, color: 'rgb(102, 25, 192)' },
          { character: 6, color: 'rgb(138, 94, 17)' },
          { character: 7, color: 'rgb(255, 97, 194)' },
          { character: 8, color: 'rgb(255, 172, 30)' },
          { character: 9, color: 'rgb(110, 10, 10)' }
        ],
        letters: [
          
        ]
      }
    };
  },
  components: {
    MechanicalOrange
  },
  computed: {
    dataSet: function() {
      if (this.type === 'numbers') {
        return { data: this.datasets.numbers };
      } else if (this.type === 'letters') {
        return { data: this.datasets.letters };
      } else {
        return { data: [] };
      }
    }
  }
}
</script>

<style scoped>

</style>
