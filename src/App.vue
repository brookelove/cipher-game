<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.d-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.d-evenly {
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
  padding:1% 2%;
  border-radius: 25px;
  transition: all ease-in-out 0.5s;
}
button:hover {
  border: 1px solid black;
  box-shadow: -10px 5px 10px rgba(0, 0, 0, 0.5);
}
.fullpage{
  height: 100vh;
}
.none {
  display: none
}
.hide {
  background-color: transparent;
  color: transparent;
}
</style>
