<template>
  <main @click="handleClick">
    <img src="/public/tableau_quete2.png" class="tableau" alt="Logo">
    <a href="Information#info1" v-html="$t('images.quetes.1')"></a>
    <a href="Information#info2" v-html="$t('images.quetes.2')"></a>
    <a href="Information#info3" v-html="$t('images.quetes.3')"></a>
    <a href="Information#info4" v-html="$t('images.quetes.4')"></a>
    <a href="Information#info5" v-html="$t('images.quetes.5')"></a>
    <a href="Information#info6" v-html="$t('images.quetes.6')"></a>
    <a href="Information#info7" v-html="$t('images.quetes.7')"></a>
    <a href="Information#info8" v-html="$t('images.quetes.8')"></a>
    <a href="Information#info9" v-html="$t('images.quetes.9')"></a>
    <a href="Information#info10" v-html="$t('images.quetes.10')"></a>
    <PopUpQuete v-if="isPopUpVisible" :selectedQuete="selectedQuete" @closePopup="isPopUpVisible = false"></PopUpQuete>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const isPopUpVisible = ref(false);
const selectedQuete = ref(null);

const handleClick = (event) => {
  if (event.target.tagName.toLowerCase() === 'a') {
    window.location.reload();
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/scss_page/tableauquete";
</style>


