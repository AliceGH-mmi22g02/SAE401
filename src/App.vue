<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>GREENPLAY</h1>

    <div class="wrapper">
      <nav>
        <hr />
        <RouterLink to="/">Accueil</RouterLink>｜
        <RouterLink to="/Quete">Quêtes</RouterLink>｜
        <RouterLink to="/Profil">Profil</RouterLink>｜


        <hr />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
