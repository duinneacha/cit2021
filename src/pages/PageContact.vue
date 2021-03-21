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
       @submit="submitForm"
       @reset="onReset"
       class="q-gutter-md"
     >

     <q-input
       filled
       v-model="contactForm.name"
       color="green"
       label="Your name *"
       hint="Name and surname"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your name']"
      />

     <q-input
       filled
       v-model="contactForm.email"
       color="green"
       label="Your email address *"
       hint="Email address"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
      />

      <q-input
        filled
        type="tel"
        v-model="contactForm.telNo"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your phone number']"
      />
     
      <q-input
        filled
        label="How can I help you?"
        type="textarea"
        v-model="contactForm.text"
      />
      

      <div>
        <q-btn
          :disable="!contactForm.name || !contactForm.email || !contactForm.text"
          color="primary"
          label="Submit"
          type="submit"
        />
        
          <!-- @click="submitForm()" -->
        
        <q-btn
          class="q-ml-sm"
          color="primary"
          disable
          flat
          label="Reset"
          type="reset"
        />
        
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
      stringContactForm: null,
      contactForm: {

        name: null,
        email: null,
        telNo: null,
        text: '',
        accept: true
      }
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
          message: 'Submitted Thank You'
        })
      }
    },

    onReset () {
      this.contactForm.name = null
      this.contactForm.email = null
      this.contactForm.telNo = null
      this.contactForm.text = ''
      this.contactForm.accept = true
    },
    testAd() {
      console.log("AD AD AD AD")
      this.$axios.get('https://jsonplaceholder.typicode.com/users')
       .then ((response) => {
	        const data = response.data
          console.log(data)
        })
    },
    submitForm() {
      console.log("In submittingForm()")
      console.log(this.contactForm.email)
      console.log(this.contactForm.telNo)

    // this.$q.loading.show()
    let formData = new FormData()
    // formData.append('id', this.post.id)
    formData.append('name', this.contactForm.name)
    formData.append('email', this.contactForm.email)
    formData.append('telNo', this.contactForm.telNo)
    formData.append('text', this.contactForm.text)
    
    console.log(formData)
    console.log(process.env.API)

    // let cForm = {
    // {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
    //     user: {
    //         name: "John",
    //         email: "john@example.com"
    //     })
    
    // stringContactForm = JSON.stringify(this.contactForm)

    // this.testAd()
    // console.log(axios)
    this.$axios.post(`${process.env.API}contactForm`, formData).then(response => {
      console.log('rrrrrrresponse : ', response)
      
      // this.$router.push('/')
      
      // this.$q.loading.hide()
    }).catch(error => {
      console.log(error)
      this.$q.dialog({
        title: 'Error',
        message: 'Sorry, could not create post'
      })
      // this.$q.loading.hide()
    })

    console.log('After axios')



      this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted Thank You!'
        })
      // this.onReset()
    }
  }
}
</script>
