<template>
  <div>

    <NavBar />

    <transition name="page" mode="out-in">
      <Nuxt />
    </transition>

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
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
