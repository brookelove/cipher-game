<script>
    import Modal from "./Modal.vue"

    let plain_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let atbash_alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    
    let convertAnswer = (input) => {
        let convertedText = []
        console.log(input);
        input = input.toUpperCase().trim().split("");
        console.log(input)
        input.map(letter => {
            let index = plain_alphabet.indexOf(letter)
            if(letter == ' ') {
                convertedText.push(" ")
            } else {
                convertedText.push(atbash_alphabet[index])
            }
        })
        return convertedText.join("")
    }

   export default{  
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
            console.log(converted)
            console.log(converted.trim() == "GSV XRKSVI TZNV")
            if(converted.trim() === "GSV XRKSVI TZNV") {
                this.openModal = true;
                this.isPassed = true;
                let progress = JSON.parse(localStorage.getItem('progress')) || [];
                progress[1] = true;
                localStorage.setItem('progress', JSON.stringify(progress));
                return;
            }
            this.answer = "";
        },
        handleInputChange(event) {
            this.answer = event.target.value;
        },
        
    },
    components: {Modal}
    }
</script>

<template>
    <div class="atbash-cipher d-center">
    <h1>Atbash</h1>
    <div class='d-center card'>
    <form @submit.prevent="checkAnswer">
        <header class='d-between'>
            <p :class="warning ? 'warn' : null">ATTEMPTS LEFT : {{ count }}</p>
            <a class="hint" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">?</a>
            <div class="hint-container" >
            <p><u>HINT 1</u> What is a type of salad and a cipher?</p>
            <p><u>HINT 2</u> Look at the salads when you hover.</p>
        </div>
        </header>
    <h2>GSV XRKSVI TZNV</h2>
    <input type='text' v-model="answer" @input="handleInputChange"/>
    <button type="submit">Send</button>
    </form>
    </div>
    <div  class="modal" v-if="openModal">
          <Modal :closeModal="closeModal" :isPassed="isPassed" :level="level"/>
    </div>
    </div>
</template>
<style>
.atbash-cipher {
    flex-direction: column;
}
.atbash-cipher .card {
    padding: 6%;
    margin-top: 2%;
    border-radius: 20px;
    border: 3px solid #9dd55d;
    background-color: var(--highlight);
    z-index: 3;
    color: #9dd55d;
    flex-direction: column;
    background-color: #476e18;
    width: 20%;
}
.atbash-cipher .hint-container {
    top: 41%;
    left: 43%;
    padding: 1%;
    border-radius: 20px;
    opacity: 0;
    position: absolute;
    color: #476e18;
    background-color: #9dd55d;
    transition: all ease-in-out 0.3s;
    
}
.hint{
    z-index:100
}
.hint:hover + .hint-container  {
    opacity: 1;
}
</style>