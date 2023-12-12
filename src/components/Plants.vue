<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            level: this.$route.params.level,
            count: 4,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
            wordColors: {
                philodendron: 'skyblue',
                spider: 'lightgreen',
                laceleaf: 'purple',
                radiator: 'yellow',
            },
            crosswordList: [
                ['Z', 'G', 'I', 'M', 'E', 'I', 'R', 'A', 'D', 'I', 'A', 'T', 'O', 'R', 'K'],
                ['M', 'Z', 'S', 'C', 'T', 'W', 'S', 'E', 'H', 'J', 'Z', 'M', 'A', 'I', 'L'],
                ['L', 'C', 'F', 'N', 'K', 'S', 'P', 'D', 'G', 'P', 'B', 'P', 'B', 'L', 'W'],
                ['Y', 'T', 'R', 'A', 'C', 'L', 'I', 'N', 'Z', 'H', 'H', 'G', 'H', 'E', 'Z'],
                ['M', 'D', 'Z', 'V', 'H', 'H', 'D', 'P', 'F', 'I', 'P', 'L', 'W', 'A', 'J'],
                ['A', 'M', 'G', 'G', 'J', 'A', 'E', 'B', 'T', 'L', 'K', 'C', 'P', 'C', 'K'],
                ['Q', 'B', 'X', 'O', 'E', 'P', 'R', 'N', 'R', 'O', 'P', 'D', 'Y', 'R', 'T'],
                ['L', 'L', 'B', 'N', 'C', 'I', 'I', 'G', 'R', 'D', 'I', 'C', 'H', 'G', 'L'],
                ['D', 'U', 'A', 'H', 'K', 'R', 'Q', 'V', 'D', 'E', 'W', 'B', 'J', 'O', 'D'],
                ['X', 'H', 'D', 'C', 'H', 'O', 'C', 'M', 'H', 'N', 'D', 'O', 'K', 'F', 'B'],
                ['V', 'H', 'J', 'X', 'E', 'G', 'V', 'H', 'C', 'D', 'L', 'Z', 'T', 'G', 'D'],
                ['U', 'M', 'N', 'C', 'N', 'L', 'L', 'U', 'X', 'R', 'H', 'G', 'F', 'E', 'U'],
                ['V', 'T', 'J', 'J', 'T', 'E', 'E', 'B', 'U', 'O', 'D', 'U', 'P', 'O', 'R'],
                ['R', 'G', 'J', 'O', 'F', 'O', 'K', 'A', 'J', 'N', 'V', 'D', 'X', 'T', 'I'],
                ['Z', 'P', 'X', 'Q', 'F', 'B', 'D', 'D', 'F', 'D', 'L', 'G', 'V', 'W', 'J'],
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
                case 'philodendron':
                    let A = document.getElementById('cell-3-9');
                    let B = document.getElementById('cell-4-9');
                    let C = document.getElementById('cell-5-9');
                    let D = document.getElementById('cell-6-9');
                    let E = document.getElementById('cell-7-9');
                    let F = document.getElementById('cell-8-9');
                    let G = document.getElementById('cell-9-9');
                    let H = document.getElementById('cell-10-9');
                    let M = document.getElementById('cell-11-9');
                    let N = document.getElementById('cell-12-9');
                    let O = document.getElementById('cell-13-9');
                    let P = document.getElementById('cell-14-9');
                    A.style.color = this.wordColors.philodendron;
                    B.style.color = this.wordColors.philodendron;
                    C.style.color = this.wordColors.philodendron;
                    D.style.color = this.wordColors.philodendron;
                    E.style.color = this.wordColors.philodendron;
                    F.style.color = this.wordColors.philodendron;
                    G.style.color = this.wordColors.philodendron;
                    H.style.color = this.wordColors.philodendron;
                    M.style.color = this.wordColors.philodendron;
                    N.style.color = this.wordColors.philodendron;
                    O.style.color = this.wordColors.philodendron;
                    P.style.color = this.wordColors.philodendron;
                    break;
                case 'spider':
                    let I = document.getElementById('cell-2-6');
                    let J = document.getElementById('cell-3-6');
                    let K = document.getElementById('cell-4-6');
                    let L = document.getElementById('cell-5-6');
                    let g = document.getElementById('cell-6-6');
                    let h = document.getElementById('cell-7-6');
                    I.style.color = this.wordColors.spider;
                    J.style.color = this.wordColors.spider;
                    K.style.color = this.wordColors.spider;
                    L.style.color = this.wordColors.spider;
                    g.style.color = this.wordColors.spider;
                    h.style.color = this.wordColors.spider;
                    break;
                case 'laceleaf':
                    let Q = document.getElementById('cell-8-1');
                    let R = document.getElementById('cell-9-2');
                    let S = document.getElementById('cell-10-3');
                    let T = document.getElementById('cell-11-4');
                    let U = document.getElementById('cell-12-5');
                    let V = document.getElementById('cell-13-6');
                    let W = document.getElementById('cell-14-7');
                    let X = document.getElementById('cell-15-8');
                    Q.style.color = this.wordColors.laceleaf;
                    R.style.color = this.wordColors.laceleaf;
                    S.style.color = this.wordColors.laceleaf;
                    T.style.color = this.wordColors.laceleaf;
                    U.style.color = this.wordColors.laceleaf;
                    V.style.color = this.wordColors.laceleaf;
                    W.style.color = this.wordColors.laceleaf;
                    X.style.color = this.wordColors.laceleaf;
                    break;
                case 'radiator':
                    let Y = document.getElementById('cell-1-6');
                    let Z = document.getElementById('cell-1-7');
                    let a = document.getElementById('cell-1-8');
                    let b = document.getElementById('cell-1-9');
                    let c = document.getElementById('cell-1-10');
                    let d = document.getElementById('cell-1-11');
                    let e = document.getElementById('cell-1-12');
                    let f = document.getElementById('cell-1-13');
                    Y.style.color = this.wordColors.radiator;
                    Z.style.color = this.wordColors.radiator;
                    a.style.color = this.wordColors.radiator;
                    b.style.color = this.wordColors.radiator;
                    c.style.color = this.wordColors.radiator;
                    d.style.color = this.wordColors.radiator;
                    e.style.color = this.wordColors.radiator;
                    f.style.color = this.wordColors.radiator
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
            let words = ['philodendron', 'laceleaf', 'radiator', 'spider']
            let word = this.answer.toLowerCase();
            let found = false;

            if (this.count === 0) {
                this.saveTime();
                this.solvePuzzleComplete();
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
            progress[4] = true;
            this.isPassed = true;
            localStorage.setItem('progress', JSON.stringify(progress));
            this.saveTime();
            this.openModal = true;
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
            <h6>Periodic Elements</h6>
            <br>
            <p>List the words that begin with the topic in this crossword </p>
        </aside>
        <main>
            <h1> {{ count }} words</h1>
            <section>
                <div class="plants-crossword-grid" id="crossword">
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

.plants-crossword-grid {
    display: grid;
    grid-template-columns: repeat(15, 45px) !important;
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}
</style>