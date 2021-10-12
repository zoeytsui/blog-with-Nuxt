<template>
  <section>
    <h5 class="center-separator">Also See</h5>

    <div class="text-left my-5">
      <div class="row justify-content-center my-auto">
        <div id="carousel" class="carousel slide multi-item-carousel" data-ride="carousel" data-interval="4000">
          <div class="carousel-inner d-flex align-items-center" role="listbox">
            <div class="carousel-item active col-md-4">
              <b-card :img-src="activeArticle.img" img-alt="Image" img-top tag="article" class="mb-2">
                <b-card-text>
                  <h6 class="my-3">{{ activeArticle.title }}</h6>
                  <p class="my-auto"><small>{{ activeArticle.date }}</small></p>

                  <hr class="my-2">

                </b-card-text>
                <nuxt-link class="btn-link" :to="localePath({ name: 'blog-slug', params: {slug: activeArticle.slug} })">{{$key('Read More')}}</nuxt-link>
              </b-card>
            </div>

            <div class="carousel-item col-md-4" v-for="article of avaiablelArticle" :key="article.slug">
              <b-card :img-src="article.img" img-alt="Image" img-top tag="article" class="mb-2">
                <b-card-text>
                  <h6 class="my-3">{{ article.title }}</h6>
                  <p class="my-auto"><small>{{ article.date }}</small></p>

                  <hr class="my-2">

                </b-card-text>
                <nuxt-link class="btn-link" :to="localePath({ name: 'blog-slug', params: {slug: article.slug} })">{{$key('Read More')}}</nuxt-link>
              </b-card>
            </div>
          </div>
          <a class="carousel-control-prev w-auto" style="left:-10px" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next w-auto" style="right:-10px" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    articles: null
  },
  computed: {
    activeArticle() { return this.articles[0] },
    avaiablelArticle() { return this.articles.filter((e, i) => i !== 0) }
  },
  mounted() {
    $('.multi-item-carousel').on('slide.bs.carousel', function (e) {
      let $e = $(e.relatedTarget),
        itemsPerSlide = 3,
        totalItems = $('.carousel-item', this).length,
        $itemsContainer = $('.carousel-inner', this),
        it = itemsPerSlide - (totalItems - $e.index());
      if (it > 0) {
        for (var i = 0; i < it; i++) {
          $('.carousel-item', this).eq(e.direction == "left" ? i : 0).appendTo($itemsContainer);
        }
      }
    });
    ['.carousel-control-prev', '.carousel-control-next'].map(str => $(str).css('filter', 'invert(1) grayscale(100)'));
  },
}
</script>

<style lang="scss" scoped>
section {
  background: #e6e6e6;
  padding: 4rem 2rem;
  .center-separator {
    display: flex;
    line-height: 1em;
    color: #23383a;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      flex-grow: 1;
      margin-top: 0.5em;
      background: #23383a;
      height: 1px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}

@media (min-width: 768px) {
  .multi-item-carousel {
    .carousel-inner {
      .carousel-item {
        // NEW to v4.3.1: all margin-right properties come with -100% as default
        // causing all hidden items to be out of the screen
        margin-right: inherit;

        &.active {
          + .carousel-item,
          + .carousel-item + .carousel-item {
            display: block; // three visible items
          }

          // prevents opposite direction "animation"
          &:not(.carousel-item-right):not(.carousel-item-left),
          &:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,
          &:not(.carousel-item-right):not(.carousel-item-left)
            + .carousel-item
            + .carousel-item {
            transition: none;
          }

          // allows new item to be visible in order to "slide in" into place
          + .carousel-item + .carousel-item + .carousel-item {
            position: absolute;
            top: 0;
            right: -(percentage(1/3));
            z-index: -1;
            display: block;
            visibility: visible;
          }
        } // .active
        &-next,
        &-prev {
          position: relative;
          transform: translate3d(0, 0, 0);
        }
      } // .carousel-item

      // farthest right hidden item must be also positioned for animations
      .carousel-item-prev.carousel-item-right {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        display: block;
        visibility: visible;
      }
    } // .carousel-inner

    // left or forward direction
    .active.carousel-item-left + .carousel-item-next.carousel-item-left,
    .carousel-item-next.carousel-item-left + .carousel-item,
    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
    .carousel-item-next.carousel-item-left
      + .carousel-item
      + .carousel-item
      + .carousel-item {
      position: relative;
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    // right or previous direction
    .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
    .carousel-item-prev.carousel-item-right + .carousel-item,
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
    .carousel-item-prev.carousel-item-right
      + .carousel-item
      + .carousel-item
      + .carousel-item {
      position: relative;
      transform: translate3d(100%, 0, 0);
      display: block;
      visibility: visible;
    }
  } // multi-item-carousel
}
</style>