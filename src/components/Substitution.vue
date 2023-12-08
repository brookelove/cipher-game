<script>
import Modal from "./Modal.vue"

let convertAnswer = (input) => {
    let convertedText = [];
    let plain_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sub_alphabet = 'QRSTUVWXYZABCDEFGHIJKLMNOP';
    input = input.toUpperCase().trim().split("");
    input.map(letter => {
        let index = plain_alphabet.indexOf(letter)
        if (letter == ' ') {
            convertedText.push(" ")
        } else {
            convertedText.push(sub_alphabet[index])
        }
    })
    console.log(convertedText)
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
            let input = this.answer.trim()
            let decrypted = convertAnswer(input);
            this.answer = "";
            if (decrypted === "JXYI CUIIQWU DUUTI JE RU TUSHOFJUT") {
                this.openModal = true;
                this.isPassed = true;
                let progress = JSON.parse(localStorage.getItem('progress')) || [];
                progress[3] = true;
                localStorage.setItem('progress', JSON.stringify(progress));
                return;
            } else {
                // if decrypted if try send modal and give option or if it is false remove 1 and handle the errors all the way down to 1
                console.log(false);
            }
        }
    },
    components: { Modal }
}
</script>

<template>
    <div class="rail-fence-cipher d-center">
        <h1>Substitution Cipher</h1>
        <div class='d-center card'>
            <form @submit.prevent="checkAnswer">
                <header class='d-between'>
                    <p :class="warning ? 'warn' : null">ATTEMPTS LEFT : {{ count }}</p>
                    <a class="hint" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">?</a>
                    <div class="hint-container">
                        <p><u><b>HINT 1</b></u> Position 16 replaced Position 11.</p>
                    </div>
                </header>
                <h2>JXYI CUIIQWU DUUTI JE RU TUSHOFJUT</h2>
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