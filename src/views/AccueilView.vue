<script>
</script>

<style lang="scss">
@import "/public/css/scss_page/accueil";
/* Autres styles */
</style>

<template>

  <main>
    <div class="intro">
      <div class="wellcome">
      <h1>{{ $t("main.welcome") }} <strong>{{ $t("special.gp")}}</strong> {{ $t("special.exclam")}}</h1>
      <p>{{ $t("main.p1") }}</p>
      </div>

      <div class="why">
        <div class="why-sign">
          <img src="@/assets/icon.png" alt="pictogramme participer"/>
          <h2>{{ $t("main.why") }}</h2>
          <p>{{ $t("main.p2") }}</p>
        </div>
        <div class="why-play">
          <img src="@/assets/icon.png" alt="pictogramme jouer"/>
          <h2>{{ $t("main.whyplay") }}</h2>
          <p>{{ $t("main.p3") }}</p>
        </div>
      </div>
    </div>

    <div class="tuto">
      <h2>{{ $t("main.how") }}</h2>
      <div class="how-container">
        <div class="how">
          <img src="@/assets/screenshot.png" alt="tuto selectionner une quête">
          <p>{{ $t("main.p4-2") }}</p>
        </div>
        <div class="how">
          <img src="@/assets/screenshot.png" alt="tuto objectifs de la quête">
          <p>{{ $t("main.p4-3") }}</p>
        </div>
      </div>
      
      <h2>{{ $t("main.what") }}</h2>
      <div class="how-container">
        <div class="how">
          <img src="@/assets/screenshot.png" alt="capture pop-up quête">
          <p>{{ $t("main.p5") }}</p>
        </div>
        <div class="how">
          <img src="@/assets/screenshot.png" alt="capture quête">
          <p>{{ $t("main.p6") }}</p>
        </div>
        <div class="how">
          <img src="@/assets/screenshot.png" alt="capture valider quête">
          <p>{{ $t("main.p7") }}</p>
        </div>
      </div>
    </div>

    <div class="questsubject">
      <h2>{{ $t("main.subject") }}</h2>
      <div class="questsubject-container">
      <div class="questsubject-column">
        <a v-html="$t('images.accueil.8')"></a>
        <a v-html="$t('images.accueil.9')"></a>
      </div>  
      <div class="questsubject-column">
        <a v-html="$t('images.accueil.10')"></a>
        <a v-html="$t('images.accueil.11')"></a>
        <a v-html="$t('images.accueil.12')"></a>
      </div>
      <div class="questsubject-column">
        <a v-html="$t('images.accueil.13')"></a>
        <a v-html="$t('images.accueil.14')"></a>
      </div>
      </div>
    </div>

    <div class="recompense">
      <h2>{{ $t("main.p8") }}</h2>
      <h3>{{ $t("main.p9") }}</h3>
      <img src="@/assets/screenshot.png">
      <div>
        <p v-html="$t('main.p10')"></p>
        <p v-html="$t('main.p11')"></p>
        <p>{{ $t("main.p12") }}</p>
      </div>
    </div>

    <div class="message">
      <h2>{{ $t("main.more") }}</h2>
      <br>
      <p>{{ $t("main.p13") }}</p>
    </div>
  </main>
</template>