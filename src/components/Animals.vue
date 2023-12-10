<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            level: this.$route.params.level,
            count: 8,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
            wordColors: {
                flamingo: 'pink',
                whale: 'darkblue',
                leopard: 'beige',
                rhino: 'grey',
                koala: 'red',
                platypus: 'green',
                tiger: 'orange',
                elephant: 'purple'
            },
            crosswordList: [
                ['E', 'L', 'D', 'B', 'W', 'B', 'F', 'L', 'F', 'R'],
                ['L', 'F', 'E', 'T', 'T', 'S', 'L', 'W', 'L', 'H'],
                ['E', 'G', 'K', 'O', 'V', 'P', 'I', 'H', 'A', 'I'],
                ['P', 'C', 'K', 'W', 'P', 'L', 'L', 'A', 'M', 'N'],
                ['H', 'P', 'O', 'X', 'L', 'A', 'S', 'L', 'I', 'O'],
                ['A', 'Z', 'A', 'M', 'T', 'T', 'R', 'E', 'N', 'T'],
                ['N', 'A', 'L', 'I', 'V', 'Y', 'A', 'D', 'G', 'I'],
                ['T', 'O', 'A', 'L', 'M', 'P', 'L', 'R', 'O', 'G'],
                ['G', 'B', 'Q', 'D', 'L', 'U', 'W', 'T', 'H', 'E'],
                ['M', 'J', 'X', 'E', 'E', 'S', 'S', 'R', 'I', 'R'],
            ]
        }
    },
    created() {
        this.startTimer();
    },
    mounted() {
        this.createCrossword();
        //CHECK LOCAL STORAGE FOR WORDS AND ADD THEM TO THE COUNT AND POP THEM INTO THE WORDS FOUND 
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
                case 'flamingo':
                    let A = document.getElementById('cell-1-8');
                    let B = document.getElementById('cell-2-8');
                    let C = document.getElementById('cell-3-8');
                    let D = document.getElementById('cell-4-8');
                    let E = document.getElementById('cell-5-8');
                    let F = document.getElementById('cell-6-8');
                    let G = document.getElementById('cell-7-8');
                    let H = document.getElementById('cell-8-8');
                    A.style.color = this.wordColors.flamingo;
                    B.style.color = this.wordColors.flamingo;
                    C.style.color = this.wordColors.flamingo;
                    D.style.color = this.wordColors.flamingo;
                    E.style.color = this.wordColors.flamingo;
                    F.style.color = this.wordColors.flamingo;
                    G.style.color = this.wordColors.flamingo;
                    H.style.color = this.wordColors.flamingo;
                    break;
                case 'whale':
                    let I = document.getElementById('cell-2-7');
                    let J = document.getElementById('cell-3-7');
                    let K = document.getElementById('cell-4-7');
                    let L = document.getElementById('cell-5-7');
                    let LM = document.getElementById('cell-6-7');
                    I.style.color = this.wordColors.whale;
                    J.style.color = this.wordColors.whale;
                    K.style.color = this.wordColors.whale;
                    L.style.color = this.wordColors.whale;
                    LM.style.color = this.wordColors.whale;
                    break;
                case 'leopard':
                    let M = document.getElementById('cell-2-2');
                    let N = document.getElementById('cell-3-3');
                    let O = document.getElementById('cell-4-4');
                    let P = document.getElementById('cell-5-5');
                    let Q = document.getElementById('cell-6-6');
                    let R = document.getElementById('cell-7-7');
                    let S = document.getElementById('cell-8-8');
                    M.style.color = this.wordColors.leopard;
                    N.style.color = this.wordColors.leopard;
                    O.style.color = this.wordColors.leopard;
                    P.style.color = this.wordColors.leopard;
                    Q.style.color = this.wordColors.leopard;
                    R.style.color = this.wordColors.leopard;
                    S.style.color = this.wordColors.leopard;

                    break;
                case 'platypus':
                    let T = document.getElementById('cell-3-5');
                    let U = document.getElementById('cell-4-5');
                    let V = document.getElementById('cell-5-5');
                    let W = document.getElementById('cell-6-5');
                    let X = document.getElementById('cell-7-5');
                    let Y = document.getElementById('cell-8-5');
                    let XY = document.getElementById('cell-9-5');
                    let YZ = document.getElementById('cell-10-8');
                    T.style.color = this.wordColors.platypus;
                    U.style.color = this.wordColors.platypus;
                    V.style.color = this.wordColors.platypus;
                    W.style.color = this.wordColors.platypus;
                    X.style.color = this.wordColors.platypus;
                    Y.style.color = this.wordColors.platypus;
                    XY.style.color = this.wordColors.platypus;
                    YZ.style.color = this.wordColors.platypus;
                    break;
                case 'rhino':
                    let Z = document.getElementById('cell-1-9');
                    let a = document.getElementById('cell-2-9');
                    let b = document.getElementById('cell-3-9');
                    let c = document.getElementById('cell-4-9');
                    let d = document.getElementById('cell-5-9');
                    let e = document.getElementById('cell-10-1');
                    let f = document.getElementById('cell-10-0');
                    Z.style.color = this.wordColors.rhino;
                    a.style.color = this.wordColors.rhino;
                    b.style.color = this.wordColors.rhino;
                    c.style.color = this.wordColors.rhino;
                    d.style.color = this.wordColors.rhino;
                    e.style.color = this.wordColors.rhino;
                    f.style.color = this.wordColors.rhino;
                    break;
                case 'koala':
                    let g = document.getElementById('cell-4-2');
                    let h = document.getElementById('cell-5-2');
                    let i = document.getElementById('cell-6-2');
                    let j = document.getElementById('cell-7-2');
                    let k = document.getElementById('cell-8-2');
                    g.style.color = this.wordColors.koala;
                    h.style.color = this.wordColors.koala;
                    i.style.color = this.wordColors.koala;
                    j.style.color = this.wordColors.koala;
                    k.style.color = this.wordColors.koala;
                    break;
                case 'tiger':
                    let o = document.getElementById('cell-6-9');
                    let p = document.getElementById('cell-7-9');
                    let q = document.getElementById('cell-8-9');
                    let r = document.getElementById('cell-9-9');
                    let s = document.getElementById('cell-10-9');
                    o.style.color = this.wordColors.tiger;
                    p.style.color = this.wordColors.tiger;
                    q.style.color = this.wordColors.tiger;
                    r.style.color = this.wordColors.tiger;
                    s.style.color = this.wordColors.tiger;
                    break;
                case 'elephant':
                    let t = document.getElementById('cell-1-0');
                    let u = document.getElementById('cell-2-0');
                    let v = document.getElementById('cell-3-0');
                    let w = document.getElementById('cell-4-0');
                    let x = document.getElementById('cell-5-0');
                    let y = document.getElementById('cell-6-0');
                    let z = document.getElementById('cell-7-0');
                    let AB = document.getElementById('cell-8-0');
                    t.style.color = this.wordColors.koala;
                    u.style.color = this.wordColors.koala;
                    v.style.color = this.wordColors.koala;
                    w.style.color = this.wordColors.koala;
                    x.style.color = this.wordColors.koala;
                    y.style.color = this.wordColors.koala;
                    z.style.color = this.wordColors.koala;
                    AB.style.color = this.wordColors.koala;

                default:
                    break;
            }
        },
        checkAnswer(e) {
            e.preventDefault();
            let listEl = document.getElementById("list");
            let words = ['flamingo', 'whale', 'leopard', 'platypus', 'rhino', 'koala', 'tiger']
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
                // ADD ITEM TO LOCAL STORAGE
                // AS AN ARRAY
            }
            this.answer = "";

            if (this.count === 0) {
                this.saveTime();
                this.openModal();
            }
        }
    }
}

</script>

<template>
    <section class="d-even container">
        <aside class="timerInst">
            <!-- counts up -->
            <h3><b>{{ timer }}</b></h3>
            <H6>Animals</H6>
            <br>
            <p>List the words that begin with the topic in this crossword </p>
        </aside>
        <main>
            <h1> {{ count }} words</h1>
            <section>
                <div class="crossword-grid" id="crossword">
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
    grid-template-columns: repeat(10, 60px);
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}
</style>