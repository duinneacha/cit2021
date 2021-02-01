<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        style="border-radius: 5px; "
        class="ali-logo"
      />
   </div>


   <div class="q-pa-md bg-grey-3 rounded-borders" style="max-width: 600px; margin: 0 auto">
     <q-toolbar
       class="text-center q-pa-md q-mb-xl"
       style="background-color: #94236E; color: #4FB854"
     >
        <q-toolbar-title >Contact Ali</q-toolbar-title>
      </q-toolbar>

     <q-form
       @submit="onSubmit"
       @reset="onReset"
       class="q-gutter-md"
     >

     <q-input
       filled
       v-model="name"
       color="green"
       label="Your name *"
       hint="Name and surname"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your name']"
      />

     <q-input
       filled
       v-model="email"
       color="green"
       label="Your email address *"
       hint="Email address"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
      />

      <q-input
        filled
        type="tel"
        v-model="age"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your phone number']"
      />
      <q-input v-model="text" filled type="textarea" label="How can I help you?" />
      

      <div>
        <q-btn  disable label="Submit"  @click="submitForm()"  type="submit" color="primary"/>
        <q-btn  disable label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageContact',
  data () {
    return {
      name: null,
      email: null,
      age: null,
      text: '',
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },
    submitForm() {
      console.log("In submittingForm()")
    }
  }
}
</script>
