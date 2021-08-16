<template>
  <section>
    <div class="topbanner">
      <h1>Blog</h1>
    </div>

    <client-only>
      <b-card-group v-for="article of articles" :key="article.slug">
        <b-card v-if="article.img" :img-src="article.img" :img-alt="article.alt" img-top tag="article" class="mx-auto mt-5 border-0 col-lg-9 col-md-12">
          <b-card-text>

            <h2>{{ article.title }}</h2>
            <div class="row">
              <p class="col my-auto"><small><em>{{ article.date }}</em></small></p>
              <p class="col col-lg-4 my-auto">
                <b-badge variant="info" class="mx-1" v-for="tag of article.tags" :key="tag">{{tag}}</b-badge>
              </p>
            </div>

            <hr class="my-2">

            <nuxt-content :document="article" />

          </b-card-text>

          <b-button pill variant="outline-info" @click="$router.push(`/blog/${article.slug}`)">Read More</b-button>
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
