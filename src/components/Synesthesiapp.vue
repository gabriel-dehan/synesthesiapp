# https://media.nature.com/original/nature-assets/srep/2014/141118/srep07089/extref/srep07089-s1.pdf

<template>
  <div class="synesthesiapp">

    <div v-if="type">
      <mechanical-orange v-if="type" v-bind="dataSet"></mechanical-orange>
    </div>
    <div v-else>
      <h1>Synesthesiapp</h1>

      <h2>1 - Passive Drill</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h1>In development...</h1>
      <h2>2 - E-DMTS</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>3 - L-DMTS</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>4 - Early Span</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>5 - Late Span</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>6 - Advanced Span</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>7 - Colors to Characters speed test</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>8 - Characters to Colors speed test</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>9 - Easy reading / calculations</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>10 - Advanced reading / calculations</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>11 - Matching (Syn N' Back)</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>12 - Backward Span</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>13 - Span task</h2>
      <button v-on:click="setNumbers">Numbers</button>
      <button v-on:click="setLetters">Letters</button>

      <h2>14 - Reading generator</h2>
      <button v-on:click="setLetters">Start</button>
      
      <h2>14 - Basic algebrae generator </h2>
      <button v-on:click="setNumbers">Start</button>

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
