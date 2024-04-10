<template>
  <main>
    <img src="/src/assets/tableau_quete2.png" class="tableau" alt="Logo">
    <a href="Information#info1"><img id="quete1" class="quete1" src="/src/assets/quete1.png" alt="Quête 1" data-quete="0" @click="handleClick($event.target)"></a>
    <a href="Information#info2"><img id="quete2" class="quete2" src="/src/assets/quete2.png" alt="Quête 2" data-quete="1" @click="handleClick($event.target)"></a>
    <a href="Information#info3"><img id="quete3" class="quete3" src="/src/assets/quete3.png" alt="Quête 3" data-quete="2" @click="handleClick($event.target)"></a>
    <a href="Information#info4"><img id="quete4" class="quete4" src="/src/assets/quete4.png" alt="Quête 4" data-quete="3" @click="handleClick($event.target)"></a>
    <a href="Information#info5"><img id="quete5" class="quete5" src="/src/assets/quete5.png" alt="Quête 5" data-quete="4" @click="handleClick($event.target)"></a>
    <a href="Information#info6"><img id="quete6" class="quete6" src="/src/assets/quete6.png" alt="Quête 6" data-quete="5" @click="handleClick($event.target)"></a>
    <a href="Information#info7"><img id="quete7" class="quete7" src="/src/assets/quete7.png" alt="Quête 7" data-quete="6" @click="handleClick($event.target)"></a>
    <a href="Information#info8"><img id="quete8" class="quete8" src="/src/assets/quete8.png" alt="Quête 8" data-quete="7" @click="handleClick($event.target)"></a>
    <a href="Information#info9"><img id="quete9" class="quete9" src="/src/assets/quete9.png" alt="Quête 9" data-quete="8" @click="handleClick($event.target)"></a>
    <a href="Information#info10"><img id="quete10" class="quete10" src="/src/assets/quete10.png" alt="Quête 10" data-quete="9" @click="handleClick($event.target)"></a>
    <PopUpQuete v-if="isPopUpVisible" :selectedQuete="selectedQuete" @closePopup="isPopUpVisible = false"></PopUpQuete>
  </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "/public/css/scss_page/tableauquete";
</style>


