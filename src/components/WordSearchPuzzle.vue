<script>
export default {
    props: {
        crosswordList: {
            type: Array,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
        wordColors: {
            type: Object,
            required: true,
        },
        crosswordClass: {
            type: String,
            required: true,
        },
        customMethod: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            level: this.$route.params.level,
            answer: '',
            isPassed: false,
            openModal: false,
            timer: '00:00:00',
            seconds: 0,
            minutes: 0,
            hours: 0,
            wordList: [],
        }
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
        invokeUpdateCellStatus() {
            this.updateCellStatus(foundWord)
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
            let words = ['flamingo', 'whale', 'leopard', 'platypus', 'rhino', 'koala', 'tiger', 'elephant']
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
};
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
                <div :class="crosswordClass" id="crossword">
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

.animals-crossword-grid {
    display: grid;
    grid-template-columns: repeat(10, 60px);
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}
</style>
