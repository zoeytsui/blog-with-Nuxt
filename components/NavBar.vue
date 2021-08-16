<template>

  <b-navbar toggleable="lg" type="dark" variant="info" fixed>
    <b-navbar-brand><img src="/images/fotterForexclusive_logo.png" width="238px" height="44px" alt="" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item @click="$router.push(`/`)">Articles</b-nav-item>
        <b-nav-item @click="$router.push(`/contact-us`)">Contact us</b-nav-item>
        <b-nav-item @click="$router.push(`/about-us`)">About us</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <img src="/images/English.png" alt="" /> English
          </template>
          <b-dropdown-item href="#"><img src="/images/English.png" alt="" /> English</b-dropdown-item>
          <b-dropdown-item href="#"><img src="/images/malay.png" alt="" /> Malay</b-dropdown-item>
          <b-dropdown-item href="#"><img src="/images/VN.png" alt="" /> Tiếng Việt</b-dropdown-item>
          <b-dropdown-item href="#"><img src="/images/CN.png" alt="" /> 繁體中文</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>

</template>

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