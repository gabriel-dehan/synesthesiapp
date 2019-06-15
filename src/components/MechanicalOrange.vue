<template>
  <div class="mechanical-orange" :style="containerStyle">
    <div v-if="currentStep === 'character'" class="character" :style="characterStyle">
      {{ currentCharacter }}
    </div>
    
    <div class="navigation">
      <button v-if="!started" v-on:click="start">Start</button>
      <button v-if="started" v-on:click="stop">Stop</button>
      <button v-if="started" v-on:click="reset">Reset</button>

      
      <label for="random" class="random-button">
        <span for="random">Random?</span>
        <input type="checkbox" id="random" v-on:change="random = !random">
      </label>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'mechanical-orange',
  props: ['data'],
  data: function() {
    return {
      characters: this.data,
      random: false,
      started: false,
      currentStep: 'character',
      steps: ['character', 'color'],
      currentIndex: -1,
      currentShownCount: 0,
      maxShownCount: 0,
      interval: null
    }
  },
  methods: {
    start: function () {
      this.started = true;

      if (this.random) {
        this.characters = _.shuffle(this.data);
      } else {
        this.characters = this.data;
      }

      const run = () => {
        this.currentStep = 'character';

        if (this.currentShownCount >= this.maxShownCount) {
          this.currentIndex += 1; 
          this.currentShownCount = 0;
          this.maxShownCount = _.random(3, 10);
        } else {
          this.currentShownCount += 1;
        }
        
        if (this.currentIndex >= this.data.length) {
          this.reset();
        }

        setTimeout(() => this.currentStep = 'color', 1000);
              
      }

      run();
      this.interval = setInterval(run, 1500);
    },
    stop: function() {
      this.started = false;
      this.currentStep = 'character';
      
      clearInterval(this.interval)
    },
    reset: function() {
      this.stop();
      this.currentIndex = 0;
      this.start();
    }
  },
  computed: {
    currentColor() {
      if (this.currentIndex >= 0) {
        return this.characters[this.currentIndex].color;
      }
    },
    currentCharacter() {
      if (this.currentIndex >= 0) {
        return this.characters[this.currentIndex].character;
      }
    },
    characterStyle() {
      return { color: this.currentColor };
    },
    containerStyle() {
      if (this.currentStep === 'character') {
        return {};
      } else {
        return { backgroundColor: this.currentColor };
      }
      
    }
  }
}
</script>

<style scoped>
.mechanical-orange {
    background-color: rgb(196,188,150);
    height: 100vh;
    width: 100vw;
}
.character {
  padding-top: 28vh;
  font-size: 20em;
  font-weight: bold;
}

.navigation {
  position: fixed;
  bottom: 4em;
  margin: 0 auto;
  width: 100%;  
}

.random-button {
  padding: 0.8em 1em 0.8em 1.2em;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 3px;
  margin: 0.5em;
  cursor: pointer;
}

.random-button input {
  margin-left: 1.4em;
}

.random-button:hover {
  color: black;
  background: white;
  border-color: black;
}
</style>
