<script>
export default {
  props: {
    closeModal: Function,
    isPassed: Boolean,
    level: Number
  },
  methods: {
    backToOverview() {
      this.closeModal();
      this.$router.push('/overview')
    },
    createConfetti() {
      const confettiCount = 10;
      const confettiContainerEl = document.querySelector('.confetti')

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerText = "🎉";
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confettiContainerEl.appendChild(confetti);
      }
      console.log('Confetti created!');
    }
  },
  mounted() {
    this.createConfetti();
  },
};
</script>

<template>
  <section className='modal'>
    <!-- add confetti pop out -->
    <div class="confetti"></div>
    <div class="congrats-modal ">
      <h1>Congratulations!</h1>


      <div class="passed">
        <button @click="backToOverview">Back To Overview</button>
      </div>
    </div>
  </section>
</template>

<style>
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
  flex-direction: column;
  font-family: 'Kalnia', serif;
}

.congrats-modal {
  background-color: var(--light);
  padding: 3%;
  border-radius: 40px;
  width: 30%;
}

.passed {
  display: flex;
  justify-content: space-around;
}

.passed button {
  background-color: var(--highlight);
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
  animation: pop 2s linear infinite;
}

@keyframes pop {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }

  50% {
    transform: translateY(-100vh) scale(1.2);
    opacity: 0.8;
  }

  100% {
    transform: translateY(100vh) scale(0.8);
    opacity: 0;
  }
}
</style>