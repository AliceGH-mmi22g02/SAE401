<script>
import LocaleChanger from '../components/LocaleChanger.vue';

export default {
  components: {
    LocaleChanger
  },
  data() {
    return {
      jsonData: { message: "Hello, World!" }
    };
  },
  mounted() {
    const innerHTML = this.$refs.myElement.innerHTML;
    console.log(innerHTML);
  },
};
</script>

<style lang="scss">
@import "/public/css/scss_page/accueil";
/* Autres styles */
</style>

<template>

  <div ref="myElement">
    <h1>SECTION TEST</h1>
    <p>{{ $t("main.p3") }}</p>
    <h1>FIN SECTION TEST</h1>
  </div>
  <main>

    <LocaleChanger/>
    <h1>{{ $t("main.home") }}</h1>
    <h2>{{ $t("main.welcome") }} <strong>{{ $t("special.gp")}}</strong> {{ $t("special.exclam")}}</h2>
    <p>{{ $t("main.p1") }}</p>
    <br>
    <h2>{{ $t("main.why") }}</h2>
    <p>{{ $t("main.p2") }}</p>
    <br>
    <h2>{{ $t("main.whyplay") }}</h2>
    <p>{{ $t("main.p3") }}</p>
    <br>
    <h2>{{ $t("main.how") }}</h2>
    <p>{{ $t("main.p4-1") }}</p>
    <p>{{ $t("main.p4-2") }}</p>
    <p>{{ $t("main.p4-3") }}</p>
    <br>
    <h2>{{ $t("main.subject") }}</h2>
    <br>
    <h2>{{ $t("main.what") }}</h2>
    <p>{{ $t("main.p5") }}</p>
    <p>{{ $t("main.p6") }}</p>
    <p>{{ $t("main.p7") }}</p>
    <br>
    <h2>{{ $t("main.rewards") }}</h2>
    <p>{{ $t("main.p8") }}</p>
    <br>
    <p>{{ $t("main.p9") }}</p>
    <br>
    <p>{{ $t("main.p10") }}</p>
    <br>
    <p>{{ $t("main.p11") }}</p>
    <br>
    <h2>{{ $t("main.more") }}</h2>
    <br>
    <p>{{ $t("main.p12") }}</p>
    <br>
    <p>{{ $t("main.p13") }}</p>

    <section>
      <h3>Au-delà des récompenses virtuelles, votre participation contribue réellement à la protection de l'environnement.</h3>
      <br>
      <h3>Alors rejoignez l'aventure GREENPLAY ! Apprenez, agissez, et soyez récompensées :)</h3>
    </section>

  </main>
</template>