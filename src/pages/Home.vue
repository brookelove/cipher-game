<script>
import Instructions from './Instructions.vue';
export default {
  components: {
    Instructions
  },
  methods: {
    scrollToComponent() {
      if (this.$refs.instructions) {
        this.$refs.instructions.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
</script>

<template>
    <section class='home-container'>
      <video autoPlay muted loop id="video-background" class='video-exclude'>
        <source src="../assets/videos/shapes.mp4" type="video/mp4"/>
      </video>
      <div class='video-overlay'>
        <button class="homeBtn" @click="scrollToComponent"><h1>CIPHER GAME</h1></button>
      </div>
    </section>
    <Instructions ref="instructions"/>
</template>

<style>
.home-container {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 5%;
  } 
.video-exclude {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    --background: var(--primary);
}
.video-overlay {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: var(--opposite);
  width: 100%;
  height: 100%;
}
.video-overlay h1 {
    font-size: 600%;
    text-transform: uppercase;
    font-family: 'Gambetta', serif;
    letter-spacing: -3px;
    transition: 700ms ease;
    text-shadow: 2%;
    text-shadow: 1px 4px 3px black;
}
.video-overlay h1:hover {
  font-variation-settings: "wght" 582; 
  letter-spacing: 10px;
}
.homeBtn, .homeBtn:hover {
    background-color: transparent;
    border-color: transparent;
    transition: all ease-in-out 0.3s;
}
</style>