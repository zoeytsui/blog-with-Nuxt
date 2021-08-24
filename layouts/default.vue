<template>
  <div>

    <NavBar />

    <Nuxt />

    <Footer />

  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("locales/getData");
  },
}
</script>

<style lang="scss">
html {
  body {
    font-family: "Exo2-Bold", "Exo2-Medium", "Exo2-semiBold";
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
