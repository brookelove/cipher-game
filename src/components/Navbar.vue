<template>
    <header className="d-between header">
        <NavLink to="/" className="home box-shadow">CG</NavLink>
        <section className='d-between'>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Overview</NavLink>
        </section>
    </header>
</template>

<style>
.header {
  padding: 1%; 
  position: sticky;
   top: 0;
 z-index: 100;
  padding: 1%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
}
header .home {
    padding:1.4% 1%;
    font-weight: 800;
    border-radius: 5px;
    background-color: var(--primary);
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