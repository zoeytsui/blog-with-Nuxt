<template>
  <section>
    <a :href="`https://www.promo-hxfxglobal.com/?lang=${targetLang}`">
      <b-img style="z-index:10; top: 438px" class="d-lg-block d-none position-fixed col-2" :src="`/images/blog_banner_pc_300x600_${$i18n.locale}.png`"></b-img>
    </a>
    <a :href="`https://www.promo-hxfxglobal.com/?lang=${targetLang}`">
      <b-img style="z-index:10; right:0; top: 438px" class="d-lg-block d-none position-fixed col-2" :src="`/images/blog_banner_pc_300x600_${$i18n.locale}.png`"></b-img>
    </a>
  </section>
</template>

<script>
export default {
  computed: {
    targetLang() {
      switch (this.$i18n.locale) {
        case 'en':
          return 'en';
        case 'vn':
          return 'vi';
      }
    }
  }
}
</script>