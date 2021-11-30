<template>
  <section>
    <a :href="adRedirect">
      <b-img :style="`z-index:10; top: ${topHeight}%`" class="d-lg-block d-none position-fixed col-2" :src="`/images/blog_banner_pc_300x600_${$i18n.locale}.png`"></b-img>
    </a>
    <a :href="adRedirect">
      <b-img :style="`z-index:10; right:0; top: ${topHeight}%`" class="d-lg-block d-none position-fixed col-2" :src="`/images/blog_banner_pc_300x600_${$i18n.locale}.png`"></b-img>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topHeight: 40
    }
  },
  computed: {
    adRedirect() {
      return `https://hd.ftmarkets.com/act/bonus_2112.html?lang=${this.$i18n.locale}&utm_source=blog&utm_medium=banner`
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300) this.topHeight = 0
      if (window.scrollY < 300) this.topHeight = 40
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>