<script setup>
import { RouterLink, RouterView } from "vue-router";
import '/public/css/_layout.scss'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <hr />
        <RouterLink class="menu" to="/">Accueil</RouterLink>｜
        <RouterLink class="menu" to="/Quete">Quêtes</RouterLink>｜
        <RouterLink class="menu" to="/Profil">Profil</RouterLink>｜


        <hr />
      </nav>
    </div>
  </header>

  <RouterView />
</template>
