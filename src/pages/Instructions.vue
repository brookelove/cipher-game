<script>
  export default {
    data() {
      return {
        count: -1,
        words: '',
        instructionArr: [
          "This is Cipher Game.",
          "Your goal is to decipher various codes and puzzles to progress through levels.",
          "Each level presents a unique cipher challenge to solve.",
          "Be careful because you only get 3 tries a day to solve it.",
          "Use clues and your logical skills to solve them.",
          "Remember, the ? in the bottom section provides helpful hints if you get stuck."
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.instruction-container h1 {
    color: var(--opposite);
    font-size: 300%;
}
.instruction-container div {
    width: 20%;
}
.instruction-container div button{
  padding:5%
}
  </style>