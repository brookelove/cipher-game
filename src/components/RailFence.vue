<script>
import Modal from "./Modal.vue"

let convertAnswer = (input) => {
    let fence = [];
    for (let i = 0; i < 3; i++) {
        fence.push([]);
    }
    let rail = 0;
    let direction = 1;
    for (let char of cipherText) {
        fence[rail].push(char);
        rail += direction;

        if (rail === 3 - 1 || rail === 0) {
            direction = -direction;
        }
    }
    this.answer = ""
    const decrypted = fence.flatMap(row => row).join('');
    return decrypted;
}

export default {
    data() {
        return {
            answer: '',
            level: this.$route.params.level,
            count: 3,
            isPassed: false,
            openModal: false,
        }
    },
    methods: {
        closeModal() {
            this.openModal = false;
        },
        checkAnswer(event) {
            event.preventDefault();
            let decrypted = convertAnswer(this.answer);
            // if decrypted if try send modal and give option or if it is false remove 1 and handdle the errors all the way down to 1
        }
    },
    components: { Modal }
}
</script>

<template>
    <div class="rail-fence-cipher d-center">
        <h1>Rail Fence Cipher</h1>
        <div class='d-center card'>
            <form @submit.prevent="checkAnswer">
                <header class='d-between'>
                    <p :class="warning ? 'warn' : null">ATTEMPTS LEFT : {{ count }}</p>
                    <a class="hint" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">?</a>
                    <div class="hint-container">
                        <p><u><b>HINT 1</b></u> The Message is right in front of you.</p>
                        <p><u><b>HINT 2</b></u> There are 3 rails in this cipher</p>
                    </div>
                </header>
                <h2>T RIE HS ECTMSAESIDEE HIDDEN</h2>
                <input type='text' v-model="answer" @input="handleInputChange" />
                <button type="submit">Send</button>
            </form>
        </div>
        <div class="modal" v-if="openModal">
            <Modal :closeModal="closeModal" :isPassed="isPassed" :level="level" />
        </div>
    </div>
</template>

<style>
.rail-fence-cipher {
    flex-direction: column;
    background-image: url(../assets/images/railFence.jpg);
    background-size: cover;
}

.rail-fence-cipher h1 {
    color: rgb(76, 88, 96);
}

.rail-fence-cipher .card {
    padding: 6%;
    margin: 2% 0 7% 0;
    border-radius: 20px;
    border: 3px solid rgb(191, 170, 154);
    background-color: var(--highlight);
    z-index: 3;
    color: rgb(191, 170, 154);
    flex-direction: column;
    background-color: rgb(166, 88, 48);
    width: 20%;
}

.rail-fence-cipher .hint-container {
    top: 41%;
    left: 43%;
    padding: 1%;
    border-radius: 20px;
    opacity: 0;
    position: absolute;
    color: rgb(191, 170, 154);
    background-color: rgb(76, 88, 96);
    transition: all ease-in-out 0.3s;

}

.rail-fence-cipher a {
    color: rgb(76, 88, 96);
    font-weight: 800;
    background-color: rgb(191, 170, 154);
    padding: 2% 4.5%;
    border-radius: 20px;
}

.rail-fence-cipher .card form input {
    padding: 6%;
    margin: 4%;
    width: 70%;
}

.rail-fence-cipher button {
    color: rgb(76, 88, 96);
    background-color: rgb(191, 170, 154);
}

.rail-fence-cipher button:hover {
    color: rgb(191, 170, 154);
    background-color: rgb(76, 88, 96);
}
</style>