<script>
// import { ref, computed } from 'vue';
import { ref, computed } from "vue";
import Ceaser from '../components/Ceaser.vue';
import Atbash from '../components/Atbash.vue';
import Substitution from "../components/Substitution.vue"
import { useRoute } from 'vue-router';

export default {
  components: {
    Ceaser,
    Atbash,
    Substitution,
  },
  setup() {
    const route = useRoute();
    const currentLevel = ref(parseInt(route.params.levelId));

    const selectedComponent = computed(() => {
      switch (currentLevel.value) {
        case 1:
          return 'Ceaser';
        case 2:
          return 'Atbash';
        case 3: {
          return 'Substitution';
        }
        default:
          return null;
      }
    });

    return {
      selectedComponent
    };
  }
};
</script>

<template>
  <section className='level-page-container'>
    <component :is="selectedComponent" />
  </section>
</template>