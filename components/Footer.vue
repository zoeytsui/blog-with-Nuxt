<template>

  <b-jumbotron class="text-center">
    <h3>Subscribe to our newsletter to receive our most updated articles</h3>

    <!-- <b-form @submit.stop.prevent> -->
    <b-input-group class="mx-auto my-3" style="width:288px">
      <b-form-input v-model="email" placeholder="Email"></b-form-input>
      <b-input-group-append>
        <b-button class="text-white" style="background-color:#fd841a" variant="warning" href="#">Subscribe</b-button>
      </b-input-group-append>
    </b-input-group>
    <!-- </b-form> -->

    <img class="my-3" src="/images/fotterForexclusive_logo.png" width="238px" height="44px" alt="" />

    <p style="color:#5C5C5C; font-family: Exo2-Medium;" class="mx-auto col-lg-9 col-md-12"><small>
        Disclaimer: All content on this website is intended for educational purposes only and “Forexclusive” (Forexclusive.com) will not be held responsible for any losses incurred. The information of this website is “general advice only” and does not take individual circumstances into account so do not trade or speculate based solely on the information provided. But viewing and participating our and the website’s content, you fully accept and agree that this website offers general advice only and that trading the financial markets is a high risk activity and should understand that past performance does not indicate future performance and that the value of investments and income from them may go up as well as down, and are not guaranteed. No representation is, has or will be made that any website visitor, client or content viewer will or is likely to achieve profits similar in any way to those discussed on this website or this website’s subsidiaries. You will not hold any person or entity responsible for any losses or damages resulting from the general advice provided here by “Forexclusive” or Forexclusive.com, its employees or directors or fellow clients.
      </small></p>

  </b-jumbotron>

</template>

<script>
export default {
  data() {
    return {
      email: null
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
