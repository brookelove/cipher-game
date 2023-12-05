<script>
// import { ref, computed } from 'vue';
import {ref, computed} from "vue";
import Ceaser from '../components/Ceaser.vue';
import Atbash from '../components/Atbash.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    Ceaser,
    Atbash
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