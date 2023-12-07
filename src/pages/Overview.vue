<script>
export default {
  data() {
    return {
      buttonStatus: [],
    };
  },
  methods: {
    checkProgress() {
      let progress = JSON.parse(localStorage.getItem('progress'));
      console.log(progress)
      //if there is no item in local storage
      if (progress === null || !Array.isArray(progress)) {
        //creates 4 buttons that are each level
        const initialButtonStatus = Array(4).fill(false);
        initialButtonStatus[0] = true; //level 1 starts true so it is not diabled 
        this.buttonStatus = initialButtonStatus;
        localStorage.setItem('progress', JSON.stringify(initialButtonStatus));
      } else {
        // check to see if there are any items that are meetingg the current time criteria and can get back to being enabled
        //if there is
        this.buttonStatus = progress.map(item => !!item);
      }
    },
    handleButtonClick(index) {
      //got to /level/:levelId (1-4)
      this.$router.push(`/level/${index}`);
    },

  },
  created() {
    this.checkProgress();
  },
};
</script>

<template>
  <section class="overview-section">
    <h1>Levels</h1>
    <div>
      <button v-for="(isDisabled, index) in buttonStatus" :key="index" :disabled="!isDisabled"
        :class="{ disabled: !isDisabled }" @click="handleButtonClick(index + 1)">
        {{ index + 1 }}
      </button>
    </div>
  </section>
</template>
  
<style scoped>
.overview-section {
  width: 100vw;
  height: 100%;
  padding: 2.5%;
  text-align: center;
}

.overview-section h1 {
  padding: 2% 0;
  font-size: 200%;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--opposite);
}

.overview-section div {
  height: 90vh;
  display: grid;
  grid: auto auto auto / auto auto auto auto;
}

.overview-section div button,
.overview-section div button.active {
  width: 70%;
  font-weight: 700;
  font-size: 250%;
  color: var(--opposite);
  background-color: var(--lowlight);
  border-radius: 10px;
  border: 3px solid var(--highlight);
  margin-bottom: 10%;
}

.overview-section div button:hover {
  color: var(--primary);
  background-color: var(--highlight);
  border: 3px solid var(--lowlight);
}

.overview-section div button.disabled {
  color: var(--extra);
  background-color: var(--muted);
  border: 3px solid var(--extra);
  box-shadow: -10px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
  