<script>
import Modal from "./Modal.vue"

let plain_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let atbash_alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

let convertAnswer = (input) => {
    let convertedText = []
    input = input.toUpperCase().trim().split("");
    input.map(letter => {
        let index = plain_alphabet.indexOf(letter)
        if (letter == ' ') {
            convertedText.push(" ")
        } else {
            convertedText.push(atbash_alphabet[index])
        }
    })
    return convertedText.join("")
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
            let converted = convertAnswer(this.answer);
            this.answer = "";
            if (converted.trim() === "GSV XRKSVI TZNV") {
                this.openModal = true;
                this.isPassed = true;
                let progress = JSON.parse(localStorage.getItem('progress')) || [];
                progress[2] = true;
                localStorage.setItem('progress', JSON.stringify(progress));
                return;
            }

        },
        handleInputChange(event) {
            this.answer = event.target.value;
        },

    },
    components: { Modal }
}
</script>

<template>
    <div class="atbash-cipher d-center">
        <h1>The Atbash Cipher</h1>
        <div class='d-center card'>
            <form @submit.prevent="checkAnswer">
                <header class='d-between'>
                    <p :class="warning ? 'warn' : null">ATTEMPTS LEFT : {{ count }}</p>
                    <a class="hint" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">?</a>
                    <div class="hint-container">
                        <p><u>HINT 1</u> What is the name of the game?</p>
                    </div>
                </header>
                <h2>GSV XRKSVI TZNV</h2>
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
.atbash-cipher {
    flex-direction: column;
}

.atbash-cipher .card {
    padding: 6%;
    margin: 2% 0 7% 0;
    border-radius: 20px;
    border: 3px solid rgb(202, 117, 242);
    background-color: var(--highlight);
    z-index: 3;
    color: rgb(202, 117, 242);
    flex-direction: column;
    background-color: #483e4e;
    width: 20%;
    box-shadow: #beafc76b 12px 12px 7px;
}

.atbash-cipher .hint-container {
    top: 41%;
    left: 43%;
    padding: 1%;
    border-radius: 20px;
    opacity: 0;
    position: absolute;
    color: rgb(202, 117, 242);
    background-color: #111908;
    transition: all ease-in-out 0.3s;
}

.atbash-cipher a {
    color: rgb(202, 117, 242);
    font-weight: 800;
    background-color: #111908;
    padding: 2% 4.5%;
    border-radius: 20px;
}

.at-bash-cipher .card form input {
    padding: 6%;
    margin: 4%;
    width: 70%;
}

.hint {
    z-index: 100
}

:global(.hint:hover+.hint-container) {
    opacity: 1;
}
</style>