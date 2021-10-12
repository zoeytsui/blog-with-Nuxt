<template>
  <section>
    <div class="topbanner">
      <h1>{{$key('Blog')}}</h1>
    </div>

    <!-- AD 1 -->
    <a :href="`https://www.hxfx.co/?lang=${targetLang}`">
      <b-img style="z-index:10; right:0; top: 438px" class="d-xl-block d-lg-block d-none position-fixed col-2" :src="`/images/300x300_${$i18n.locale}.jpg`"></b-img>
    </a>

    <client-only>
      <b-card-group ref="article" v-for="article,index of articles" :key="index" class="justify-content-center">
        <b-card tag="article" class="border-0 col-lg-8">

          <b-card-img v-if="article.img" :src="article.img" :alt="article.alt" class="my-3" center fluid></b-card-img>

          <b-card-text>
            <b-row>
              <b-col class="col-12 col-lg-8">
                <h2>{{ article.title }}</h2>
                <p class="my-auto"><em>{{ article.date }}</em></p>
              </b-col>

              <b-col class="col-12 col-lg-4 my-auto">
                <b-row class="col d-none">
                  <p class="my-auto">{{$key('Share')}}: </p>
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=http://forexclusive.info${$route.fullPath}`">
                    <b-img class="mx-1" width="32" height="32" left src="/images/FB.png"></b-img>
                  </a>
                  <a href="https://instagram.com/hxfx_global?utm_medium=copy_link">
                    <b-img class="mx-1" width="32" height="32" left src="/images/IG.png"></b-img>
                  </a>
                </b-row>

                <b-badge variant="info" class="mx-1" v-for="tag of article.tags" :key="tag">{{tag}}</b-badge>
              </b-col>
            </b-row>

            <hr class="my-2">
            <nuxt-content :document="article" />
          </b-card-text>

          <b-button pill variant="outline-info" :to="localePath(`/blog/${article.slug}`)">{{$key('Read More')}}</b-button>

          <!-- AD 2 -->
          <a v-if="index===0" :href="`https://www.hxfx.co/?lang=${targetLang}`">
            <b-img class="mt-5" center fluid :src="`/images/1220x300_${$i18n.locale}.jpg`"></b-img>
          </a>

        </b-card>
      </b-card-group>
    </client-only>

  </section>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const articles = await $content(`articles/${i18n.locale}`)
      .sortBy('createdAt', 'desc')
      .fetch();
    return { articles }
  },
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
