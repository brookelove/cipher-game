<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            level: this.$route.params.level,
            count: 6,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
            wordColors: {
                hydrogen: 'skyblue',
                zinc: 'lightgreen',
                bismuth: 'purple',
                krypton: 'yellow',
                tungsten: 'orange',
                sulfur: 'red',
            },
            crosswordList: [
                ['O', 'X', 'Y', 'G', 'I', 'N', 'T', 'C', 'T'],
                ['R', 'H', 'Q', 'F', 'W', 'O', 'U', 'E', 'U'],
                ['H', 'O', 'S', 'T', 'H', 'M', 'N', 'K', 'N'],
                ['Y', 'I', 'C', 'U', 'C', 'D', 'G', 'I', 'G'],
                ['D', 'E', 'F', 'N', 'L', 'Y', 'S', 'Z', 'S'],
                ['R', 'G', 'I', 'S', 'A', 'F', 'T', 'J', 'T'],
                ['O', 'Z', 'B', 'I', 'S', 'M', 'U', 'T', 'E'],
                ['G', 'L', 'S', 'N', 'Z', 'I', 'N', 'R', 'N'],
                ['E', 'Q', 'B', 'N', 'Z', 'B', 'A', 'L', 'I'],
                ['N', 'O', 'T', 'P', 'Y', 'R', 'K', 'I', 'M'],
            ]
        }
    },
    created() {
        this.checkProgress();
        this.startTimer();
    },
    mounted() {
        this.createCrossword();
    },
    methods: {
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
        createCrossword() {
            const crosswordGridEl = document.getElementById('crossword');
            this.crosswordList.forEach((row, rowIndex) => {
                const rowEl = document.createElement('row');

                row.forEach((cell, cellIndex) => {
                    const cellP = document.createElement('p');
                    cellP.textContent = cell;
                    cellP.setAttribute("type", 'text');
                    cellP.setAttribute('maxlength', '1');
                    cellP.setAttribute('id', `cell-${rowIndex + 1}-${cellIndex}`);
                    rowEl.appendChild(cellP);
                })
                crosswordGridEl.appendChild(rowEl);
            })

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
        handlePause(e) {
            if (this.timerRunning) {
                this.timerRunning = false;
                this.stopTimer();
                this.saveProgress();
            } else {
                this.timerRunning = true;
                this.saveProgress();
                this.startTimer();
            }

        },
        handleResume() {
            this.saveProgress();
            this.startTimer();
        },
        stopTimer() {
            this.timerRunning = false;
            clearInterval(this.intervalId);
        },
        saveTime() {
            const currentTime = this.timer;
            localStorage.setItem('winTime', currentTime);
        },
        updateTimer() {
            const pad = (num) => (num < 10 ? `0${num}` : num);
            this.timer = `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
        },
        handleInputChange(event) {
            this.answer = event.target.value;
        },
        saveProgress() {
            localStorage.setItem('colorList', JSON.stringify(this.wordList));
        },
        saveTime() {
            const currentTime = this.timer;
            localStorage.setItem('winTime', currentTime);
        },
        closeModal() {
            this.openModal = false;
        },
        updateCellStatus(foundWord) {
            switch (foundWord) {
                case 'hydrogen':
                    let A = document.getElementById('cell-3-0');
                    let B = document.getElementById('cell-4-0');
                    let C = document.getElementById('cell-5-0');
                    let D = document.getElementById('cell-6-0');
                    let E = document.getElementById('cell-7-0');
                    let F = document.getElementById('cell-8-0');
                    let G = document.getElementById('cell-9-0');
                    let H = document.getElementById('cell-10-0');
                    A.style.color = this.wordColors.hydrogen;
                    B.style.color = this.wordColors.hydrogen;
                    C.style.color = this.wordColors.hydrogen;
                    D.style.color = this.wordColors.hydrogen;
                    E.style.color = this.wordColors.hydrogen;
                    F.style.color = this.wordColors.hydrogen;
                    G.style.color = this.wordColors.hydrogen;
                    H.style.color = this.wordColors.hydrogen;
                    break;
                case 'zinc':
                    let I = document.getElementById('cell-7-1');
                    let J = document.getElementById('cell-6-2');
                    let K = document.getElementById('cell-5-3');
                    let L = document.getElementById('cell-4-4');
                    I.style.color = this.wordColors.zinc;
                    J.style.color = this.wordColors.zinc;
                    K.style.color = this.wordColors.zinc;
                    L.style.color = this.wordColors.zinc;
                    break;
                case 'bismuth':
                    let M = document.getElementById('cell-7-2');
                    let N = document.getElementById('cell-7-3');
                    let O = document.getElementById('cell-7-4');
                    let P = document.getElementById('cell-7-5');
                    let Q = document.getElementById('cell-7-6');
                    let R = document.getElementById('cell-7-7');
                    let S = document.getElementById('cell-7-8');
                    M.style.color = this.wordColors.bismuth;
                    N.style.color = this.wordColors.bismuth;
                    O.style.color = this.wordColors.bismuth;
                    P.style.color = this.wordColors.bismuth;
                    Q.style.color = this.wordColors.bismuth;
                    R.style.color = this.wordColors.bismuth;
                    S.style.color = this.wordColors.bismuth;

                    break;
                case 'sulfur':
                    let T = document.getElementById('cell-3-2');
                    let U = document.getElementById('cell-4-3');
                    let V = document.getElementById('cell-5-4');
                    let W = document.getElementById('cell-6-5');
                    let X = document.getElementById('cell-7-6');
                    let Y = document.getElementById('cell-8-7');
                    T.style.color = this.wordColors.sulfur;
                    U.style.color = this.wordColors.sulfur;
                    V.style.color = this.wordColors.sulfur;
                    W.style.color = this.wordColors.sulfur;
                    X.style.color = this.wordColors.sulfur;
                    Y.style.color = this.wordColors.sulfur;
                    break;
                case 'krypton':
                    let Z = document.getElementById('cell-10-6');
                    let a = document.getElementById('cell-10-5');
                    let b = document.getElementById('cell-10-4');
                    let c = document.getElementById('cell-10-3');
                    let d = document.getElementById('cell-10-2');
                    let e = document.getElementById('cell-10-1');
                    let f = document.getElementById('cell-10-0');
                    Z.style.color = this.wordColors.krypton;
                    a.style.color = this.wordColors.krypton;
                    b.style.color = this.wordColors.krypton;
                    c.style.color = this.wordColors.krypton;
                    d.style.color = this.wordColors.krypton;
                    e.style.color = this.wordColors.krypton;
                    f.style.color = this.wordColors.krypton;
                    break;
                case 'tungsten':
                    let g = document.getElementById('cell-1-8');
                    let h = document.getElementById('cell-2-8');
                    let i = document.getElementById('cell-3-8');
                    let j = document.getElementById('cell-4-8');
                    let k = document.getElementById('cell-5-8');
                    let l = document.getElementById('cell-6-8');
                    let m = document.getElementById('cell-7-8');
                    let n = document.getElementById('cell-8-8');
                    g.style.color = this.wordColors.tungsten;
                    h.style.color = this.wordColors.tungsten;
                    i.style.color = this.wordColors.tungsten;
                    j.style.color = this.wordColors.tungsten;
                    k.style.color = this.wordColors.tungsten;
                    l.style.color = this.wordColors.tungsten;
                    m.style.color = this.wordColors.tungsten;
                    n.style.color = this.wordColors.tungsten;
                    break;
                default:
                    break;
            }
        },
        checkProgress() {
            const savedGameTimer = localStorage.getItem('gameTimer');
            if (savedGameTimer) {
                const gameTimer = JSON.parse(savedGameTimer);
                this.timer = gameTimer.timer;
                this.seconds = gameTimer.seconds;
                this.minutes = gameTimer.minutes;
                this.hours = gameTimer.hours;
                const savedColors = JSON.parse(localStorage.getItem('colorList'));
                if (savedColors) {
                    this.wordList = savedColors;
                }
            }
        },
        saveProgress() {
            let wordListEl = document.getElementById("list")
            let tempArr = []
            for (let i = 0; i < wordListEl.children.length; i++) {
                const wordId = wordListEl.children[i].id;
                if (wordId && wordId.textContent && !tempArr.includes(word)) {
                    tempArr.push(wordId.textContent);
                }
            }
            const gameTimer = {
                timer: this.timer,
                seconds: this.seconds,
                minutes: this.minutes,
                hours: this.hours,
            }
            this.wordList = tempArr;
            localStorage.setItem('gameState', JSON.stringify(gameTimer));
            localStorage.setItem('colorList', JSON.stringify(this.wordList));
        },
        checkAnswer(e) {
            e.preventDefault();
            let listEl = document.getElementById("list");
            let words = ['hydrogen', 'zinc', 'bismuth', 'sulfur', 'krypton', 'tungsten']
            let word = this.answer.toLowerCase();
            let found = false;

            if (this.count === 0) {
                this.saveTime();
                this.openModal();
            }
            for (let i = 0; i < words.length; i++) {
                if (words[i] === word) {
                    found = true;
                    this.count--;
                    this.updateCellStatus(word);
                }
            }

            if (!found) {
                let inputEl = document.getElementById("input");
                let sendBtn = document.getElementById("sendBtn")
                inputEl.classList.add("wrongAnswer");
                sendBtn.classList.add("wrongBtn");
                setTimeout(() => {
                    inputEl.classList.remove("wrongAnswer");
                    sendBtn.classList.remove("wrongBtn");
                }, 1000);
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
                this.solvePuzzleComplete();
            }
        },
        solvePuzzleComplete() {
            let progress = JSON.parse(localStorage.getItem('progress')) || [];
            console.log(progress)
            if (this.count === 0) {
                progress[2] = true;
                console.log(progress)
                this.isPassed = true;
                localStorage.setItem('progress', JSON.stringify(progress));
                this.saveTime();
                this.openModal = true;
                console.log("Modal status:", this.openModal);
            }
        }
    },
    components: { Modal }
}

</script>

<template>
    <section class="d-even container elements-container">
        <aside class="timerInst">
            <!-- counts up -->
            <h3><b>{{ timer }}</b></h3>
            <H6>Periodic Elements</H6>
            <br>
            <p>List the words that begin with the topic in this crossword </p>
        </aside>
        <main>
            <h1> {{ count }} words</h1>
            <section>
                <div class="elements-crossword-grid" id="crossword">
                </div>
                <form>
                    <input type='text' v-model="answer" @input="handleInputChange" id="input" />
                    <button @click="checkAnswer" class="sendBtn" id="sendBtn">SEND WORD</button>
                </form>
            </section>
        </main>
        <aside class="wordList">
            <h3>Words Found</h3>
            <ul id="list"></ul>
        </aside>
        <Modal v-if="openModal" :closeModal="closeModal" :isPassed="isPassed" :level="level" />
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

.elements-crossword-grid {
    display: grid;
    grid-template-columns: repeat(10, 60px);
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}
</style>