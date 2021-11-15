<template>
  <section>
    <div class="topbanner">
      <b-img src="/images/Contact_banner.jpg" style="min-height:150px" fluid-grow alt=""></b-img>
    </div>

    <b-jumbotron bg-variant="white">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h2 class="text-left mb-5">{{$key('Contact us')}}</h2>
        <b-form-group>
          <b-form-input v-model="form.name" :placeholder="`${$key('Contact Name')} :`" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="form.email" type="email" :placeholder="`${$key('Email')} :`" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="form.subject" :placeholder="`${$key('Subject')} :`" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-textarea v-model="form.description" :placeholder="`${$key('Description')} :`" required></b-form-textarea>
        </b-form-group>

        <b-button pill class="px-5 m-2" type="submit" variant="info">{{$key('Send')}}</b-button>
        <b-button pill class="px-5 m-2" type="reset" variant="secondary">{{$key('Reset')}}</b-button>
      </b-form>
    </b-jumbotron>

  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        description: null
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$axios.$post(`https://openapi.hxfxglobal.com/tools/?service=acccenter.addContactUs`, this.form).then(res => {
        if (res.ret !== 200) return alert(`${res.ret}: ${res.msg}`)
        alert('Succeed!')
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form = {
        name: null,
        email: null,
        subject: null,
        description: null
      };
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  width: 70%;
  margin: auto;
  text-align: center;
  position: relative;
  top: -10vw;
  border-radius: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  form {
    width: 100%;
    .form-control {
      border: 0;
      background-color: #f3f6fa;
      border-radius: 10px;
    }
  }
}
</style>
