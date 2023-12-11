<script>
export default {
  data() {
    return {
      count: -1,
      words: '',
      instructionArr: [
        "This is a simple game to find a word search puzzle.",
        "Your goal is to locate various words under a specific categoriers to progress through levels.",
        "Each level presents a differert category challenge to solve.",
        "Use logic to solve these cues.",
        "Good Luck"
      ]
    };
  },
  methods: {
    showInstructions() {
      if (this.count < this.instructionArr.length) {
        this.words = this.instructionArr[this.count];
        this.count++;
      }
    },
    restartInstruction() {
      this.count = 0;
      this.words = this.instructionArr[this.count];
    }
  }
};
</script>
  

<template>
  <div class="instruction-container d-center" id="instructions">
    <h1 :style="{ opacity: words ? '1' : '0' }">{{ words }}</h1>
    <template v-if="instructionArr.length === count">
      <div class="d-between">
        <router-link to="/overview">
          <button>Start Game</button>
        </router-link>
        <button @click="restartInstruction">Read Again</button>
      </div>
    </template>
    <template v-else>
      <button @click="showInstructions">{{ count === 0 || count === -1 ? 'Click Me' : 'Continue' }}</button>
    </template>
  </div>
</template>

<style>
.instruction-container {
  height: 100vh;
  background-color: #e0e6e7;
  flex-direction: column;
  text-align: center;
}

.instruction-container h1 {
  font-family: 'Abril Fatface', serif;
  /* font-family: 'Alfa Slab One', serif; */
  /* font-family: 'Kalnia', serif; */
  color: var(--opposite);
  font-size: 300%;
}

.instruction-container div {
  width: 20%;
}

.instruction-container div button {
  padding: 5%;
}
</style>