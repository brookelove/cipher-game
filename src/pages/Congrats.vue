<script>
export default {
    methods: {
        playAgain() {
            localStorage.removeItem('progress');
            this.$router.push('/overview')
        }
    }
}
</script>
<template class="congrats">
    <section class="congratsContainer">
        <h1>Congrats! You Have Finished Find The Words!</h1>
        <h2>Thanks for Playing</h2>
        <div>
            <button @click="playAgain">Play Again</button>
            <router-link to="/"><button>Go Home</button></router-link>
        </div>
    </section>
</template>
<style>
.congrats {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.congratsContainer {
    padding: 3%;
    margin: 7% 22%;
    background-color: var(--lowlight);
    color: #bba2f3;
    border-radius: 36px;
    font-family: 'Gambetta', serif;
    box-shadow: -10px 5px 10px rgba(193, 193, 193, 0.5);
}

.congratsContainer div {
    display: flex;
    justify-content: space-around;
}
</style>