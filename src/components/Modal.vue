<script>
export default {
  props: {
    closeModal: Function,
    isPassed: Boolean,
    level: Number
  },
  methods: {
    nextLevel() {
      this.closeModal();
      if (this.isPassed) {
        window.location.href = `/level/${this.level + 1}`;
      }
    },
    backToOverview() {
      this.closeModal();
      window.location.href = "/overview";
    },
    createConfetti() {
      const confettiCount = 10;
      const confettiContainerEl = document.querySelector('.confetti-container')

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerText = "🎉";
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(confettiContainerEl);
      }
    }
  },
  mounted() {
    this.createConfetti();
  },
};
</script>

<template>
  <section className='congrats-modal'>
    <!-- add confetti pop out -->
    <div class="confetti"></div>
    <h1 v-if="isPassed">Congratulations!</h1>
    <h1 v-else>Try Again Next Time</h1>

    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="isPassed" class="passed">
      <button @click="closeModal">Next Level</button>
      <button @click="backToOverview">Back To Overview</button>
    </div>
    <div v-else>
      <button @click="backToOverview">See You In 24H</button>
    </div>
  </section>
</template>

<style>
/* make come forward and absolute */
/* make the confetti pop */
/* add a sound? */
.modal {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.532);
  width: 100vw;
  z-index: 100;
}

.congrats-modal {
  background-color: rgb(217, 220, 238);
  padding: 3%;
  border-radius: 25px;
  width: 30%;
}

.passed {
  display: flex;
  justify-content: space-around;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  /* Change color as desired */
  border-radius: 50%;
  pointer-events: none;
  /* Prevent interaction with confetti elements */
  animation: confetti-fall 2s linear infinite;
}

@keyframes pop {
  0% {
    transform: translateY(-100vh) rotateZ(0);
  }

  100% {
    transform: translateY(100vh) rotateZ(720deg);
  }
}
</style>