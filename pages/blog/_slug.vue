<template>
  <article>
    <div class="topbanner">
      <h1>Blog</h1>
    </div>
    <client-only>
      <b-card-group class="main">
        <b-card v-if="article.img" :img-src="article.img" :img-alt="article.alt" img-top tag="article" class="mx-auto mt-5 border-0 col-lg-9 col-md-12">
          <b-card-text>

            <h2>{{ article.title }}</h2>
            <p><small><em>{{ article.date }}</em></small></p>

            <hr class="my-2">

            <nuxt-content :document="article" />
          </b-card-text>
        </b-card>
      </b-card-group>
    </client-only>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();
    return { article }
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
  }
}
</style>
