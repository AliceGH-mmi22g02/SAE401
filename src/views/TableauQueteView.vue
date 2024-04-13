<template>
  <main @click="handleClick">
    <img src="/public/tableau_quete2.png" class="tableau" alt="Logo">
    <a href="Information#info1" id="quete1" class="quete1" v-html="$t('images.quetes.1')" @click="handleClick($event.target)"></a>
    <a href="Information#info2" id="quete2" class="quete2" v-html="$t('images.quetes.2')" @click="handleClick($event.target)"></a>
    <a href="Information#info3" id="quete3" class="quete3" v-html="$t('images.quetes.3')" @click="handleClick($event.target)"></a>
    <a href="Information#info4" id="quete4" class="quete4" v-html="$t('images.quetes.4')" @click="handleClick($event.target)"></a>
    <a href="Information#info5" id="quete5" class="quete5" v-html="$t('images.quetes.5')" @click="handleClick($event.target)"></a>
    <a href="Information#info6" id="quete6" class="quete6" v-html="$t('images.quetes.6')" @click="handleClick($event.target)"></a>
    <a href="Information#info7" id="quete7" class="quete7" v-html="$t('images.quetes.7')" @click="handleClick($event.target)"></a>
    <a href="Information#info8" id="quete8" class="quete8" v-html="$t('images.quetes.8')" @click="handleClick($event.target)"></a>
    <a href="Information#info9" id="quete9" class="quete9" v-html="$t('images.quetes.9')" @click="handleClick($event.target)"></a>
    <a href="Information#info10" id="quete10" class="quete10" v-html="$t('images.quetes.10')" @click="handleClick($event.target)"></a>
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


