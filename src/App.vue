<script setup>
import LocaleChanger from "@/components/LocaleChanger.vue";
</script>

<template>
  <header>
    <div>
      <nav>
        <hr />
        <RouterLink class="menu" to="/">Accueil</RouterLink>｜
        <RouterLink class="menu" to="/Quete">Quêtes</RouterLink>｜
        <RouterLink class="menu" to="/Profil">Profil</RouterLink>
        <hr />
      </nav>
    </div>
  </header>
  <div>
    <LocaleChanger/>
  </div>
  <RouterView />
</template>
