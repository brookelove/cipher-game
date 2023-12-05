<script resutlsModal>
    defineProps({closeModal,isPassed,level})

    const nextLevel = () => {
    closeModal()
    window.location.href(`/level/${level+1}`);
  }
  const backToOverview = () => {
    closeModal()
    window.location.href("/overview");
  }
</script>

<template>
    <section className='congrats-modal'>
        <h1 v-if="isPassed">Congratulations!</h1> <h1 v-else>Try Again Next Time</h1>
       
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div v-if="isPassed">
          <button @click="closeModal">Next Level</button>
          <button @click="backToOverview">Back To Overview</button>
        </div>
        <div v-else>
            <button @click="backToOverview">See You In 24H</button>
        </div>
    </section>

</template>