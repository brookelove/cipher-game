<script>
</script>

<template>
  <header className="d-between header">
    <router-link to="/" class="home box-shadow">CG</router-link>
    <section class='d-around'>
      <router-link to="/about">About</router-link>
      <router-link to="/overview">Overview</router-link>
    </section>
  </header>
</template>

<style>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 2%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  box-sizing: border-box;
  width: 100vw;
}

.header a {
  font-family: 'Abril Fatface', serif;
  color: var(--extra);
}

.header section a {
  font-weight: 700;
}

header .home {
  padding: 1.4% 1%;
  font-weight: 800;
  border-radius: 5px;
  color: var(--highlight);
  background-color: var(--opposite);
  border: 1px solid transparent;
  transition: all ease-in 0.3;
}

header .home:hover {
  border: 1px solid var(--opposite);
  color: var(--opposite);
}

header section {
  width: 10%;
}
</style>