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
        //creates 5 buttons that are each level
        const initialButtonStatus = Array(5).fill(false);
        initialButtonStatus[0] = true; //level 1 starts true so it is not diabled 
        this.buttonStatus = initialButtonStatus;
        localStorage.setItem('progress', JSON.stringify(initialButtonStatus));
      } else {
        this.buttonStatus = progress.map(item => !!item);
      }
    },
    handleButtonClick(index) {
      //got to /level/:levelId (1-5)
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
  background-color: #c2a9fd;
}

.overview-section h1 {
  font-family: 'Kalnia', serif;
  padding: 2% 0;
  font-size: 375%;
  letter-spacing: 5px;
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
  color: var(--highlight);
  background-color: var(--lowlight);
  border-radius: 10px;
  border: 3px solid var(--dark);
  margin-bottom: 10%;
  font-family: 'Kalnia', serif;
}

.overview-section div button:hover {
  color: var(--highlight);
  background-color: var(--light);
  border: 3px solid var(--primary);
}

.overview-section div button.disabled {
  color: var(--extra);
  background-color: var(--muted);
  border: 3px solid var(--extra);
  box-shadow: -10px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
  