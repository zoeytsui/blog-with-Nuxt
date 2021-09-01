<template>
  <section>
    <div class="topbanner">
      <b-img src="/images/Contact_banner.jpg" style="min-height:150px" fluid-grow alt=""></b-img>
    </div>

    <b-jumbotron bg-variant="white">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h2 class="text-left mb-5">Contact us</h2>
        <b-form-group>
          <b-form-input v-model="form.name" placeholder="Contact Name :" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="form.email" type="email" placeholder="Email :" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input v-model="form.subject" placeholder="Subject :" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-textarea v-model="form.description" placeholder="Description :" required>
          </b-form-textarea>
        </b-form-group>

        <b-button pill class="px-5 m-2" type="submit" variant="info">Send</b-button>
        <b-button pill class="px-5 m-2" type="reset" variant="secondary">Reset</b-button>
      </b-form>
    </b-jumbotron>

  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        description: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.$objectToQueryString(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.description = ''
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
