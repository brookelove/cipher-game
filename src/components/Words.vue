<script>
import Modal from "./Modal.vue";
export default {
    data() {
        return {
            level: this.$route.params.level,
            count: 5,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
            wordColors: {
                red: 'tomato',
                orange: 'orange',
                blue: 'skyblue',
                green: 'lightgreen',
                gold: 'gold',
            },
        }
    },
    created() {
        this.startTimer();
    },
    methods: {
        handleInputChange(event) {
            this.answer = event.target.value;
        },
        closeModal() {
            this.openModal = false;
        },
        startTimer() {
            this.timerRunning = true;
            this.intervalId = setInterval(() => {
                this.seconds++;
                if (this.seconds === 60) {
                    this.seconds = 0;
                    this.minutes++;
                    if (this.minutes === 60) {
                        this.minutes = 0;
                        this.hours++;
                    }
                }
                this.updateTimer();
            }, 1000);
        },
        stopTimer() {
            this.timerRunning = false;
            clearInterval(this.intervalId);
        },
        updateTimer() {
            const pad = (num) => (num < 10 ? `0${num}` : num);
            this.timer = `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
        },
        saveProgress() {
            localStorage.setItem('colorList', JSON.stringify(this.wordList));
        },
        saveTime() {
            const currentTime = this.timer;
            localStorage.setItem('winTime', currentTime);
        },
        updateCellStatus(foundWord) {
            switch (foundWord) {
                case 'orange':
                    let A = document.getElementById('cell-6-6');
                    let B = document.getElementById('cell-5-6');
                    let C = document.getElementById('cell-4-6');
                    let D = document.getElementById('cell-3-6');
                    let E = document.getElementById('cell-2-6');
                    let F = document.getElementById('cell-1-6');
                    A.style.color = this.wordColors.orange;
                    B.style.color = this.wordColors.orange;
                    C.style.color = this.wordColors.orange;
                    D.style.color = this.wordColors.orange;
                    E.style.color = this.wordColors.orange;
                    F.style.color = this.wordColors.orange;
                    break;
                case 'red':
                    let G = document.getElementById('cell-3-3');
                    let H = document.getElementById('cell-4-3');
                    let I = document.getElementById('cell-5-3');
                    G.style.color = this.wordColors.red;
                    H.style.color = this.wordColors.red;
                    I.style.color = this.wordColors.red;
                    break;
                case 'blue':
                    let J = document.getElementById('cell-7-3');
                    let K = document.getElementById('cell-6-2');
                    let L = document.getElementById('cell-5-1');
                    let M = document.getElementById('cell-4-0');
                    J.style.color = this.wordColors.blue;
                    K.style.color = this.wordColors.blue;
                    L.style.color = this.wordColors.blue;
                    M.style.color = this.wordColors.blue;

                    break;
                case 'gold':
                    let N = document.getElementById('cell-4-4');
                    let O = document.getElementById('cell-5-5');
                    let P = document.getElementById('cell-6-6');
                    let Q = document.getElementById('cell-7-7');
                    N.style.color = this.wordColors.gold;
                    O.style.color = this.wordColors.gold;
                    P.style.color = this.wordColors.gold;
                    Q.style.color = this.wordColors.gold;
                    break;
                case 'green':
                    let R = document.getElementById('cell-3-7');
                    let S = document.getElementById('cell-4-7');
                    let T = document.getElementById('cell-5-7');
                    let U = document.getElementById('cell-6-7');
                    let V = document.getElementById('cell-7-7');
                    R.style.color = this.wordColors.green;
                    S.style.color = this.wordColors.green;
                    T.style.color = this.wordColors.green;
                    U.style.color = this.wordColors.green;
                    V.style.color = this.wordColors.green;
                    break;
                default:
                    break;
            }
        },
        checkAnswer(e) {
            e.preventDefault();
            let listEl = document.getElementById("list");
            let words = ['red', 'orange', 'blue', 'green', 'gold']
            let word = this.answer.toLowerCase();
            let found = false;

            for (let i = 0; i < words.length; i++) {
                if (words[i] === word) {
                    found = true;
                    this.count--;
                    this.updateCellStatus(word);
                }
            }

            if (found) {
                this.saveProgress();
                let fullWordEl = document.createElement("li");
                fullWordEl.setAttribute("id", word);
                fullWordEl.textContent = word.toUpperCase();
                listEl.appendChild(fullWordEl);
                let color = this.wordColors[word];
                let temp = document.getElementById(word);
                temp.style.color = color;
            }
            this.answer = "";

            if (this.count === 0) {
                this.saveTime();
                this.openModal();
            }
        }
    },
    components: { Modal }
}
</script>
<template>
    <section class="d-even container">
        <aside class="timerInst">
            <!-- counts up -->
            <h3><b>{{ timer }}</b></h3>
            <H6>Colors</H6>
            <br>
            <p>List the words that begin with the topic in this crossword </p>
        </aside>
        <main>
            <h1>{{ count }} words</h1>
            <section>
                <div class="crossword-grid">
                    <row>
                        <p type="text" maxlength="1" id="cell-0-0">P</p>
                        <p type="text" maxlength="1" id="cell-0-1">O</p>
                        <p type="text" maxlength="1" id="cell-0-2">Y</p>
                        <p type="text" maxlength="1" id="cell-0-3">T</p>
                        <p type="text" maxlength="1" id="cell-0-4">S</p>
                        <p type="text" maxlength="1" id="cell-0-5">L</p>
                        <p type="text" maxlength="1" id="cell-0-6">A</p>
                        <p type="text" maxlength="1" id="cell-0-7">E</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-1-0">B</p>
                        <p type="text" maxlength="1" id="cell-1-1">V</p>
                        <p type="text" maxlength="1" id="cell-1-2">A</p>
                        <p type="text" maxlength="1" id="cell-1-3">C</p>
                        <p type="text" maxlength="1" id="cell-1-4">M</p>
                        <p type="text" maxlength="1" id="cell-1-5">L</p>
                        <p type="text" maxlength="1" id="cell-1-6">E</p>
                        <p type="text" maxlength="1" id="cell-1-7">R</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-2-0">C</p>
                        <p type="text" maxlength="1" id="cell-2-1">Y</p>
                        <p type="text" maxlength="1" id="cell-2-2">A</p>
                        <p type="text" maxlength="1" id="cell-2-3">R</p>
                        <p type="text" maxlength="1" id="cell-2-4">X</p>
                        <p type="text" maxlength="1" id="cell-2-5">S</p>
                        <p type="text" maxlength="1" id="cell-2-6">G</p>
                        <p type="text" maxlength="1" id="cell-2-7">N</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-3-0">C</p>
                        <p type="text" maxlength="1" id="cell-3-1">Y</p>
                        <p type="text" maxlength="1" id="cell-3-2">A</p>
                        <p type="text" maxlength="1" id="cell-3-3">R</p>
                        <p type="text" maxlength="1" id="cell-3-4">X</p>
                        <p type="text" maxlength="1" id="cell-3-5">S</p>
                        <p type="text" maxlength="1" id="cell-3-6">N</p>
                        <p type="text" maxlength="1" id="cell-3-7">N</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-4-0">E</p>
                        <p type="text" maxlength="1" id="cell-4-1">M</p>
                        <p type="text" maxlength="1" id="cell-4-2">Z</p>
                        <p type="text" maxlength="1" id="cell-4-3">E</p>
                        <p type="text" maxlength="1" id="cell-4-4">D</p>
                        <p type="text" maxlength="1" id="cell-4-5">I</p>
                        <p type="text" maxlength="1" id="cell-4-6">A</p>
                        <p type="text" maxlength="1" id="cell-4-7">E</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-5-0">F</p>
                        <p type="text" maxlength="1" id="cell-5-1">U</p>
                        <p type="text" maxlength="1" id="cell-5-2">S</p>
                        <p type="text" maxlength="1" id="cell-5-3">D</p>
                        <p type="text" maxlength="1" id="cell-5-4">I</p>
                        <p type="text" maxlength="1" id="cell-5-5">L</p>
                        <p type="text" maxlength="1" id="cell-5-6">R</p>
                        <p type="text" maxlength="1" id="cell-5-7">E</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-6-0">I</p>
                        <p type="text" maxlength="1" id="cell-6-1">N</p>
                        <p type="text" maxlength="1" id="cell-6-2">L</p>
                        <p type="text" maxlength="1" id="cell-6-3">A</p>
                        <p type="text" maxlength="1" id="cell-6-4">O</p>
                        <p type="text" maxlength="1" id="cell-6-5">R</p>
                        <p type="text" maxlength="1" id="cell-6-6">O</p>
                        <p type="text" maxlength="1" id="cell-6-7">R</p>
                    </row>
                    <row>
                        <p type="text" maxlength="1" id="cell-7-0">C</p>
                        <p type="text" maxlength="1" id="cell-7-1">T</p>
                        <p type="text" maxlength="1" id="cell-7-2">B</p>
                        <p type="text" maxlength="1" id="cell-7-3">B</p>
                        <p type="text" maxlength="1" id="cell-7-4">K</p>
                        <p type="text" maxlength="1" id="cell-7-5">L</p>
                        <p type="text" maxlength="1" id="cell-7-6">Z</p>
                        <p type="text" maxlength="1" id="cell-7-7">G</p>
                    </row>
                </div>
                <form>
                    <input type='text' v-model="answer" @input="handleInputChange" />
                    <button @click="checkAnswer" class="sendBtn">SEND WORD</button>
                </form>
            </section>

        </main>
        <aside class="wordList">
            <h3>Words Found</h3>
            <ul id="list"></ul>
        </aside>
    </section>
</template>
<style>
.container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 7% 0;
}

.timerInst {
    width: 25%
}

main {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
}

.crossword-grid {
    display: grid;
    grid-template-columns: repeat(8, 60px);
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}

/* .row {
    display: flex;
    justify-content: center;
    align-items: center;
} */

.row p {
    text-align: center;
    border: 1px solid #ccc;
}

input,
input:active {
    padding: 5%;
    margin-top: 4%;
    width: 85%;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: rgb(113, 111, 137) 3px solid;
    font-size: 2em;
}

.wordList {
    text-align: center;
    width: 25%;
}

/* .cell {
    color: limegreen;
} */

.sendBtn {
    margin: 4% 0;
}
</style>