<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            level: this.$route.params.level,
            count: 7,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
            wordColors: {
                china: 'skyblue',
                kenya: 'lightgreen',
                austria: 'purple',
                fiji: 'yellow',
                korea: 'orange',
                yemen: 'red',
                madagascar: 'brown'
            },
            crosswordList: [
                ['T', 'L', 'M', 'S', 'E', 'A', 'T', 'T', 'L', 'E', 'S', 'C'],
                ['G', 'N', 'H', 'A', 'N', 'I', 'H', 'C', 'L', 'N', 'E', 'K'],
                ['V', 'C', 'B', 'U', 'D', 'D', 'J', 'K', 'V', 'S', 'V', 'O'],
                ['F', 'X', 'R', 'S', 'J', 'A', 'P', 'A', 'Z', 'W', 'I', 'R'],
                ['I', 'D', 'K', 'T', 'F', 'Z', 'G', 'S', 'P', 'R', 'Q', 'E'],
                ['J', 'B', 'E', 'R', 'J', 'A', 'P', 'A', 'M', 'P', 'L', 'A'],
                ['I', 'Y', 'N', 'I', 'A', 'I', 'R', 'T', 'S', 'U', 'A', 'T'],
                ['R', 'J', 'Y', 'A', 'R', 'M', 'Z', 'D', 'E', 'C', 'T', 'S'],
                ['L', 'L', 'Z', 'O', 'J', 'L', 'K', 'E', 'N', 'Y', 'A', 'A'],
                ['Y', 'E', 'M', 'E', 'N', 'S', 'T', 'I', 'J', 'C', 'V', 'R'],
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
                case 'china':
                    let A = document.getElementById('cell-2-7');
                    let B = document.getElementById('cell-2-6');
                    let C = document.getElementById('cell-2-5');
                    let D = document.getElementById('cell-2-4');
                    let E = document.getElementById('cell-2-3');
                    A.style.color = this.wordColors.china;
                    B.style.color = this.wordColors.china;
                    C.style.color = this.wordColors.china;
                    D.style.color = this.wordColors.china;
                    E.style.color = this.wordColors.china;

                    break;
                case 'madagascar':
                    let F = document.getElementById('cell-1-2');
                    let G = document.getElementById('cell-2-3');
                    let H = document.getElementById('cell-3-4');
                    let I = document.getElementById('cell-4-5');
                    let J = document.getElementById('cell-5-6');
                    let K = document.getElementById('cell-6-7');
                    let L = document.getElementById('cell-7-8');
                    let t = document.getElementById('cell-8-9');
                    let u = document.getElementById('cell-9-10');
                    let v = document.getElementById('cell-10-11');
                    F.style.color = this.wordColors.madagascar;
                    G.style.color = this.wordColors.madagascar;
                    H.style.color = this.wordColors.madagascar;
                    I.style.color = this.wordColors.madagascar;
                    J.style.color = this.wordColors.madagascar;
                    K.style.color = this.wordColors.madagascar;
                    L.style.color = this.wordColors.madagascar;
                    t.style.color = this.wordColors.madagascar;
                    u.style.color = this.wordColors.madagascar;
                    v.style.color = this.wordColors.madagascar;
                    break;
                case 'austria':
                    let M = document.getElementById('cell-2-3');
                    let N = document.getElementById('cell-3-3');
                    let O = document.getElementById('cell-4-3');
                    let P = document.getElementById('cell-5-3');
                    let Q = document.getElementById('cell-6-3');
                    let R = document.getElementById('cell-7-3');
                    let S = document.getElementById('cell-8-3');
                    M.style.color = this.wordColors.austria;
                    N.style.color = this.wordColors.austria;
                    O.style.color = this.wordColors.austria;
                    P.style.color = this.wordColors.austria;
                    Q.style.color = this.wordColors.austria;
                    R.style.color = this.wordColors.austria;
                    S.style.color = this.wordColors.austria;

                    break;
                case 'yemen':
                    let T = document.getElementById('cell-10-0');
                    let U = document.getElementById('cell-10-1');
                    let V = document.getElementById('cell-10-2');
                    let W = document.getElementById('cell-10-3');
                    let X = document.getElementById('cell-10-4');
                    T.style.color = this.wordColors.yemen;
                    U.style.color = this.wordColors.yemen;
                    V.style.color = this.wordColors.yemen;
                    W.style.color = this.wordColors.yemen;
                    X.style.color = this.wordColors.yemen;
                    break;
                case 'fiji':
                    let Z = document.getElementById('cell-4-0');
                    let a = document.getElementById('cell-5-0');
                    let b = document.getElementById('cell-6-0');
                    let c = document.getElementById('cell-7-0');
                    Z.style.color = this.wordColors.fiji;
                    a.style.color = this.wordColors.fiji;
                    b.style.color = this.wordColors.fiji;
                    c.style.color = this.wordColors.fiji;
                    break;
                case 'korea':
                    let g = document.getElementById('cell-2-11');
                    let h = document.getElementById('cell-3-11');
                    let i = document.getElementById('cell-4-11');
                    let j = document.getElementById('cell-5-11');
                    let k = document.getElementById('cell-6-11');
                    g.style.color = this.wordColors.korea;
                    h.style.color = this.wordColors.korea;
                    i.style.color = this.wordColors.korea;
                    j.style.color = this.wordColors.korea;
                    k.style.color = this.wordColors.korea;
                    break;
                case 'kenya':
                    let o = document.getElementById('cell-9-6');
                    let p = document.getElementById('cell-9-7');
                    let q = document.getElementById('cell-9-8');
                    let r = document.getElementById('cell-9-9');
                    let s = document.getElementById('cell-9-10');
                    o.style.color = this.wordColors.korea;
                    p.style.color = this.wordColors.korea;
                    q.style.color = this.wordColors.korea;
                    r.style.color = this.wordColors.korea;
                    s.style.color = this.wordColors.korea;
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
            let words = ['china', 'kenya', 'austria', 'yemen', 'fiji', 'korea', 'madagascar']
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
            progress[3] = true;
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
            <H6>Countries</H6>
            <br>
            <p>List the words that begin with the topic in this crossword </p>
        </aside>
        <main>
            <h1> {{ count }} words</h1>
            <section>
                <div class="countries-crossword-grid" id="crossword">
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

.countries-crossword-grid {
    display: grid;
    grid-template-columns: repeat(10, 60px);
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}
</style>