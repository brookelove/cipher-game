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
    }
  }
};
</script>

<template>
  <section className='congrats-modal'>
    <!-- add confetti pop out -->
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
    <div v-if="isPassed">
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
</style>