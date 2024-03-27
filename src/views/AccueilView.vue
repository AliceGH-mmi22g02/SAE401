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

  <main>
    <div class="banniere" style="background-color: #5E807F; height: 350px"><img src=""></div>

    <div class="intro" style="background-color:#35e2a6">
      <h1>{{ $t("main.welcome") }} <strong>{{ $t("special.gp")}}</strong> {{ $t("special.exclam")}}</h1>
      <p>{{ $t("main.p1") }}</p>

      <h2>{{ $t("main.why") }}</h2>
      <p>{{ $t("main.p2") }}</p>

      <h2>{{ $t("main.whyplay") }}</h2>
      <p>{{ $t("main.p3") }}</p>
    </div>

    <div class="tuto" style="background-color:#35e2a6">
      <h2>{{ $t("main.how") }}</h2>
      <p>{{ $t("main.p4-1") }}</p>
      <p>{{ $t("main.p4-2") }}</p>
      <p>{{ $t("main.p4-3") }}</p>

      <h2>{{ $t("main.what") }}</h2>
      <p>{{ $t("main.p5") }}</p>
      <p>{{ $t("main.p6") }}</p>
      <p>{{ $t("main.p7") }}</p>
    </div>

    <div class="questsubject" style="background-color:#35e2a6">
      <h2>{{ $t("main.subject") }}</h2>
    </div>

    <div class="tuto" style="background-color:#35e2a6">
      <h2>{{ $t("main.rewards") }}</h2>
      <p>{{ $t("main.p8") }}</p>
      <p>{{ $t("main.p9") }}</p>
      <p>{{ $t("main.p10") }}</p>
      <p>{{ $t("main.p11") }}</p>
    </div>

    <div class="tuto" style="background-color:#35e2a6">
      <h2>{{ $t("main.more") }}</h2>
      <br>
      <p>{{ $t("main.p12") }}</p>
      <br>
      <p>{{ $t("main.p13") }}</p>
    </div>
  </main>
</template>