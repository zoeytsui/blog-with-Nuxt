<template>

  <b-navbar toggleable="lg" type="dark" variant="info" fixed>
    <b-navbar-brand><img src="/images/fotterForexclusive_logo.png" width="238px" height="44px" alt="" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <!-- <b-nav-item custom :to="localePath(`/`)">{{ $key('Articles') }}</b-nav-item>
        <b-nav-item custom :to="localePath(`/contact-us`)">{{$key('Contact us')}}</b-nav-item>
        <b-nav-item custom :to="localePath(`/about-us`)">{{$key('About us')}}</b-nav-item> -->

        <b-nav-item custom :to="localePath(`/`)">{{ 'Articles' }}</b-nav-item>
        <b-nav-item custom :to="localePath(`/contact-us`)">{{'Contact us'}}</b-nav-item>
        <b-nav-item custom :to="localePath(`/about-us`)">{{'About us'}}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>

          <template #button-content>
            <img :src="currentLangInfo.img" alt="" /> {{ currentLangInfo.name }}
          </template>

          <!-- <b-dropdown-item v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"> -->
          <b-dropdown-item v-for="locale in availableLocales" :key="locale.code">
            <img :src="locale.img" alt="" /> {{locale.name}}
          </b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>

</template>


<script>
export default {
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
    currentLangInfo() {
      return this.$i18n.locales.find(i => i.code === this.currentLang)
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
#nav-collapse {
  .nav-link:focus {
    color: #fff;
    text-decoration: underline;
  }
  .b-nav-dropdown {
    img {
      width: 28px;
      height: 28px;
      margin-right: 5px;
    }
  }
}
</style>