<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alfa+Slab+One&family=Kalnia:wght@500;600;700&display=swap');

body {
  margin: 0%;
  padding: 0;
}

:global(.d-center) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:global(.d-between) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

:global(.d-around) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

:global(li) {
  list-style-type: none;
}

:global(.d-evenly) {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  text-decoration: none;
  color: #140f0b;
}

.box-shadow {
  box-shadow: var(--box-shadow)
}

main {
  background-color: var(--lightBackground);
  color: var(--primary-text);
}

button {
  border: 1px solid transparent;
  box-shadow: -10px 15px 10px rgba(0, 0, 0, 0.5);
  margin: 2%;
  padding: 1% 2%;
  border-radius: 25px;
  transition: all ease-in-out 0.5s;
}

button:hover {
  border: 1px solid black;
  box-shadow: -10px 5px 10px rgba(0, 0, 0, 0.5);
}

.fullpage {
  height: 100vh;
}

.none {
  display: none
}

.hide {
  background-color: transparent;
  color: transparent;
}

:global(.wrongAnswer) {
  color: red;
  animation: shake 0.5s;
}

:global(.wrongBtn) {
  color: whitesmoke;
  background-color: red;
  border-color: darkred;
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
