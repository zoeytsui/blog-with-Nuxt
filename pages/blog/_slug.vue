<template>
  <section>
    <div class="topbanner">
      <h1>{{$key('Blog')}}</h1>
    </div>

    <SideAd />

    <client-only>
      <b-card-group class="main my-1">
        <b-card tag="article" class="mx-auto border-0 col-lg-8 col-md-12">
          <b-card-img v-if="article.img" :src="article.img" :alt="article.alt"></b-card-img>
          <b-card-text>

            <b-row>
              <b-col class="col-12 d-flex flex-column">
                <!-- <b-col class="col-12 col-lg-8"> -->
                <h2>{{ article.title }}</h2>
                <p class="my-auto"><em>{{ article.date }}</em></p>
                <!-- <div>
                  <b-badge variant="info" class="mx-1" v-for="tag of article.tags" :key="tag">{{tag}}</b-badge>
                </div> -->
              </b-col>

              <b-col class="col-12 col-lg-4 d-none">
                <b-row class="col">
                  <p class="my-auto">{{$key('Share')}}: </p>
                  <!-- <a href="https://www.facebook.com/HXFXGlobal/"> -->
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=http://forexclusive.info${$route.fullPath}`">
                    <b-img class="mx-1" width="32" height="32" left src="/images/FB.png"></b-img>
                  </a>
                  <a href="https://instagram.com/hxfx_global?utm_medium=copy_link">
                    <b-img class="mx-1" width="32" height="32" left src="/images/IG.png"></b-img>
                  </a>
                </b-row>

              </b-col>
            </b-row>

            <hr class="my-2">

            <nuxt-content :document="article" />

            <!-- mobile only -->
            <a class="d-block d-lg-none" :href="adRedirect">
              <b-img class="mt-0" center fluid :src="`/images/blog_banner_mobile_300x200_${targetLang}.png`"></b-img>
            </a>

          </b-card-text>
        </b-card>
      </b-card-group>
    </client-only>

    <!-- <AlsoSee :articles="articles" class="mt-8" /> -->
  </section>
</template>

<script>
export default {
  async asyncData({ $content, i18n, params }) {
    try {
      const article = await $content(`articles/${i18n.locale}`, params.slug).fetch();
      const articles = await $content(`articles/${i18n.locale}`).fetch();
      return { article, articles }
    } catch (error) { console.error(error) }
  },
  computed: {
    targetLang() {
      switch (this.$i18n.locale) {
        case 'en':
          return 'en';
        case 'vn':
          return 'vi';
      }
    },
    adRedirect() {
      return `https://hd.ftmarkets.com/act/bonus_2111.html?lang=${this.$i18n.locale}&utm_source=blog&utm_medium=banner`
    }
  }
}
</script>

<style lang="scss" scoped>
.topbanner {
  height: 332px;
  background: url("/images/topbanner.png") no-repeat top center;
  background-size: cover;
  position: relative;
  text-align: center;
  h1 {
    color: white;
    position: absolute;
    top: 40%;
    left: 20%;
  }
}
.main {
  .nuxt-content {
    img {
      margin: 10px;
      display: inline-block;
    }
    div {
      overflow: auto;
    }
    table {
      * {
        border: 1px solid #000;
      }
      p,
      img {
        border: 0;
      }
    }
  }
}
/* Using plain CSS */
@media (max-width: 768px) {
  .main {
    .nuxt-content {
      img {
        width: 100%;
      }
    }
  }
}
</style>
