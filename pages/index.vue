<template>
  <section>
    <div class="topbanner">
      <h1>Blog</h1>
    </div>

    <!-- AD 1 -->
    <b-img style="z-index:10; right:0; top: 494px" class="d-xl-block d-lg-block d-none position-fixed col-2" src="/images/300x300_en.jpg"></b-img>

    <client-only>
      <b-card-group ref="article" v-for="article,index of articles" :key="index">
        <!-- <b-card-group ref="article" v-for="article of articles" :key="article.slug"> -->
        <b-card tag="article" class="mx-auto mt-5 border-0 col-lg-9">

          <b-card-img v-if="article.img" :src="article.img" :alt="article.alt" class="px-0 my-4" center fluid></b-card-img>

          <b-card-text>
            <b-row>
              <b-col class="col-12 col-lg-8">
                <h2>{{ article.title }}</h2>
                <p class="my-auto"><em>{{ article.date }}</em></p>
              </b-col>

              <b-col class="col-12 col-lg-4 my-auto">
                <b-row class="col d-none">
                  <p class="my-auto">Share: </p>
                  <!-- <a href="https://www.facebook.com/HXFXGlobal/"> -->
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=http://172.20.132.148:7071${$route.fullPath}`">
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

          <b-button pill variant="outline-info" :to="`/blog/${article.slug}`">Read More</b-button>

          <!-- AD 2 -->
          <b-img v-if="index ===0" class="col-lg-12 px-0 my-5" center fluid src="/images/1220x300_en.jpg"></b-img>

        </b-card>
      </b-card-group>
    </client-only>

  </section>
</template>

<script>
export default {
  async asyncData(context) {
    const articles = await context.$content('articles', context.params.slug)
      .sortBy('createdAt', 'desc')
      .fetch();
    return { articles }
  },
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
