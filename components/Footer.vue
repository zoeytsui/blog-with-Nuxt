<template>

  <b-jumbotron class="text-center">
    <h3>{{$key('Subscribe to our newsletter to receive our most updated articles')}}</h3>

    <!-- <b-form @submit.stop.prevent> -->
    <b-input-group class="mx-auto my-3 col-lg-6 col-md-6 col-sm-12" style="min-width:288px">
      <b-form-input v-model="email" :placeholder="`${$key('Email')}`"></b-form-input>
      <b-input-group-append>
        <b-button class="text-white" style="background-color:#fd841a" variant="warning" @click="onSubscribe">{{$key('Subscribe')}}</b-button>
      </b-input-group-append>
    </b-input-group>
    <!-- </b-form> -->

    <img class="my-3" src="/images/fotterForexclusive_logo.png" width="238px" height="44px" alt="" />

    <p style="color:#5C5C5C; font-family: Exo2-Medium;" class="mx-auto col-lg-9 col-md-12"><small>
        <!-- {{$key("Disclaimer: \r\nThe information and materials provided here, whether or not provided on Forexclusive' website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information and educational purposes only.")}} -->
        {{$key('Disclaimer: \r\n' +
        "The information and materials provided here, whether or not provided on Forexclusive' website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information and educational purposes only.\r\n" +
        '\r\n' +
        '“Forexclusive” (Forexclusive.com) including its directors, officers or employees do not guarantee the accuracy or completeness of any information or analysis supplied and accepts no responsibility or liability of your personal investment objectives, specific investment goals, specific needs or financial situation. \r\n' +
        '\r\n' +
        'By opening this website, you fully agree and understand all the terms and conditions mentioned above and trading financial products carries a high level of risk and may not be suitable for all individuals.')}}
      </small></p>

  </b-jumbotron>

</template>

<script>
export default {
  data() {
    return {
      email: null
    }
  },
  methods: {
    onSubscribe() {
      if (!this.email || this.email === '') return;
      this.$axios.$post(`api/tools/?service=acccenter.addSubscribe`, { email: this.email }).then(res => {
        if (res.ret !== 200) return alert(`${res.ret}: ${res.msg}`)
        alert('Succeed!')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background: url("/images/FooterBG.png") no-repeat center;
  background-size: cover;
  border-radius: 0;
  margin: 0;
}
</style>
