<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        style="border-radius: 5px; "
        class="ali-logo"
      />
   </div>


   <div class="q-pa-md rounded-borders" style="max-width: 600px; margin: 0 auto">
     <q-toolbar
       class="text-center q-pa-md q-mb-xl"
       style="background-color: #94236E; color: #4FB854"
     >
        <q-toolbar-title >Nurtition Questionnaire</q-toolbar-title>
      </q-toolbar>
      <div class="row bg-grey-4 shadow-3 rounded-borders q-pa-md q-mb-xl">
        <p class="text-subtitle2">Please fill out this confidential questionnaire if you wish to make an appointment for Nutritional support. This will give Ali an understanding of your health issues or areas of health you may need support in (some of which you may not be aware of). This is important for all Nutrition consultations regardless of your goals.</p>
        <p class="text-caption q-mb-none">All information is treated with strictest confidentiality.</p>
        <p class="text-caption q-mt-none">You may be requested to provide recent blood tests if deemed necessary.</p>
      </div>

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
        type="tel"
        v-model="age"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your phone number']"
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
        label="How can I help you?"
        hint="asdasdasd"
        type="textarea"
        v-model="text"
      />
      

      <div>
        <q-btn label="Submit"  @click="submitForm()"  type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        
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
