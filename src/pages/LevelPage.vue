<script>
// import { ref, computed } from 'vue';
import { ref, computed } from "vue";
import Words from "../components/Words.vue";
import Plants from "../components/Plants.vue";
import Animals from "../components/Animals.vue";
import Elements from "../components/Elements.vue";
import Countries from "../components/Countries.vue";
import WordSearchPuzzle from "../components/WordSearchPuzzle.vue";
import { useRoute } from 'vue-router';

export default {
  components: {
    Words,
    Elements,
    Countries,
    Animals,
    Plants,
  },
  setup() {
    const route = useRoute();
    const currentLevel = ref(parseInt(route.params.levelId));

    const updateCellStatus = (foundWord, componentName) => {
      switch (componentName) {
        case 'Words':
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
        case 'Elements':
          // Fetch or define data for the Elements component
          return /* Data for Elements component */;
        case 'Countries':
          // Fetch or define data for the Countries component
          return /* Data for Countries component */;
        case 'Animals':
          // Fetch or define data for the Animals component
          return /* Data for Animals component */;
        case 'Plants':
          // Fetch or define data for the Plants component
          return /* Data for Plants component */;
        default:
          return null;
      }
    }
    const selectedComponent = computed(() => {
      switch (currentLevel.value) {
        case 1:
          return 'Words';
        case 2:
          return 'Elements';
        case 3:
          return 'Countries';
        case 4:
          return 'Animals'
        case 5:
          return 'Plants'
        default:
          return null;
      }
    });

    return {
      selectedComponent
    };
  }
}
</script>

<template>
  <section className='level-page-container'>
    <component :is="selectedComponent" />
  </section>
</template>