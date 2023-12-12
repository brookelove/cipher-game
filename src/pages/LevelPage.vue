<script>
// import { ref, computed } from 'vue';
import { ref, computed } from "vue";
import Words from "../components/Words.vue";
import Plants from "../components/Plants.vue";
import Animals from "../components/Animals.vue";
import Elements from "../components/Elements.vue";
import Countries from "../components/Countries.vue";
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
};
</script>

<template>
  <section className='level-page-container'>
    <component :is="selectedComponent" />
  </section>
</template>