<template>
  <section>
    <div class="topbanner">
      <h1>{{$key('Blog')}}</h1>
    </div>

    <!-- AD 1 -->
    <SideAd />

    <client-only>
      <b-card-group ref="article" v-for="article,index of articles" :key="index" class="justify-content-center">
        <b-card tag="article" class="border-0 col-lg-8">

          <b-card-img v-if="article.img" :src="article.img" :alt="article.alt" class="my-3" center fluid></b-card-img>

          <b-card-text>
            <b-row>
              <b-col class="col-12 d-flex flex-column">
                <!-- <b-col class="col-12 col-lg-8"> -->
                <h2>{{ article.title }}</h2>
                <p class="my-auto"><em>{{ formatDate(article.date) }}</em></p>
                <!-- <div>
                  <b-badge variant="info" class="mx-1" v-for="tag of article.tags" :key="tag">{{tag}}</b-badge>
                </div> -->
              </b-col>

              <b-col class="col-12 col-lg-4 d-none">
                <b-row class="col">
                  <p class="my-auto">{{$key('Share')}}: </p>
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
          </b-card-text>

          <b-button pill variant="outline-info" :to="localePath(`/blog/${article.slug}`)">{{$key('Read More')}}</b-button>

          <!-- AD 2 -->
          <!-- pc only -->
          <!-- <a v-if="index===0" class="d-none d-lg-block" :href="`https://www.promo-hxfxglobal.com/?lang=${targetLang}`">
            <b-img class="mt-5" center fluid :src="`/images/blog_banner_pc_300x250_${$i18n.locale}.png`"></b-img>
          </a> -->

          <!-- mobile only -->
          <a v-if="index % 2" class="d-block d-lg-none" :href="adRedirect">
            <b-img class="mt-5" center fluid :src="`/images/blog_banner_mobile_300x200_${$i18n.locale}.png`"></b-img>
          </a>

        </b-card>
      </b-card-group>
    </client-only>

  </section>
</template>

<script>
import SideAd from '../components/SideAd.vue';
export default {
  components: { SideAd },
  async asyncData({ $content, i18n }) {
    const articles = await $content(`articles/${i18n.locale}`)
      .sortBy('date', 'desc')
      .fetch();
    // console.log('articles', articles);
    return { articles }
  },
  computed: {
    adRedirect() {
      return `https://hd.ftmarkets.com/act/bonus_2111.html?lang=${this.$i18n.locale}&utm_source=blog&utm_medium=banner`
    }
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat(this.$i18n.locale).format(new Date(date))
    },
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
.nuxt-content {
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
