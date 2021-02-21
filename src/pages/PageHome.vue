<template>
  <q-page class="bg-green-2 constrain">
   <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        class="ali-logo"
      />
   </div>

   <div class="row q-mt-sm">

      <q-card
        class="my-card text-grey-2 text-center full-width"
        style="background-color: #94236E; color: #4FB854"
        
      >
        <q-card-section>
          <div class="text-h6">NUTRITION & NEUROMUSCULAR SPORTS THERAPIST</div>
          <div class="text-subtitle2">Ali Dorgan Dip NT, BA Soc. Sc. Member NTOI, Member Thyroid Nutrition Ireland.</div>
        </q-card-section>

        <q-card-section>
          Ali's Nutrition and Sports Therapy supports you to reach your optimal health and well-being. 
          Using her extensive knowledge, qualifications and experience, Ali will guide you to reach your goals.
        </q-card-section>
        <q-card-section>
          <div class="row justify-evenly">
            <q-img
              class="col-2"
              src="../assets/tni.png"
              style="width: 20%"
            />
             <q-img
              class="col-2"
              src="../assets/ntoi.png"
              style="width: 20%"
            />
          </div>
        </q-card-section>
      </q-card>
   </div>

    <div class="row bg-green-2">
          <q-card class="my-card">
              
    <q-card-section horizontal>
        <q-img
          class="col-5"
          src="../assets/ali-about.jpg"
        />

        <q-card-section class="text-subtitle2">
          <p>Ali’s passion and interest in well-being stems from her background in competitive sports. Having qualified in 2003 with a degree in Social Science, Ali went on to attain a Neuromuscular Therapy qualification in 2005. Healthy eating and nutrition always being a solid part of Ali’s lifestyle. She further developed her knowledge and expertise with a 4 Year Nutritional Therapy qualification which she graduated from in 2018.</p>
          <p>She enjoys working with clients who have health issues and are committed to make long term changes to improve their health. </p>
          <p>Ali has done further training in Advanced Dry Needling (Acupuncture) and uses a hands-on approach to her treatments. </p>
          <p>Ali will guide, support, encourage, challenge and educate you on what is important for your health and to achieve your goals.</p>

        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        
        <q-btn
          flat 
          class="bg-grey-6 text-white"
          to="/contact"
          >
          Book
        </q-btn>
      </q-card-actions>
    </q-card>
    </div>
    <!-- <div class="row bg-green-2">
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h5 q-pa-xs text-bold">Services</q-toolbar-title>
      </q-toolbar>

      <div class="q-pa-md col-6" >
        <neorumuscular-list />
        
      </div>

      <div class="q-pa-md col-6" >
        <nutrition-list />
      </div>
    </div> -->

    <!-- Testemonials  -->
    <testimonials />
    
    <!-- Locate Us  -->
    <div
      class="row"
      style="background-color: #94236E;"
    >
      <!-- <p class="text-h3 text-grey-9 text-bold text-uppercase text-center q-pa-md" style="margin: 0 auto;">Testimonials</p> -->
      <q-toolbar class="text-grey-2 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="q-pa-md text-weight-bold">Locate Ali</q-toolbar-title>
      </q-toolbar>

      
    </div>
   <q-card class="my-card full-width">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="../assets/ali_portrait.jpg"
        />

        <q-card-section class="text-center"> 

          <div>

          <p class="text-bold text-center">Ali Dorgan</p>
          <p class="no-margin">Shaleila</p>
          <p class="no-margin">Newtown Road</p>
          <p class="no-margin">Cobh</p>
          <p class="no-margin">Co. Cork</p>
          <p>P24 PX86</p>


          <p class="text-caption">A bungalow with carport across from The Village Inn pub</p>

          </div>
        </q-card-section>
      </q-card-section>
      <q-card-actions>
        <q-btn
          class="bg-grey-6 text-white"
          flat
          icon="email"
          to="/contact"
          
          >alisnutrition@gmail.com</q-btn>
          
          <q-btn class="q-ml-md" color="grey-6" type="a" icon="phone" href="tel:0877727580">087 7727580</q-btn>

      </q-card-actions>
      
    </q-card> 
  <google-map />
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  
  components: {
    'google-map': require('components/googlemap.vue').default,
    'neorumuscular-list' : require('components/homepage/NeuromuscularHeaderList.vue').default,
    'nutrition-list' : require('components/homepage/NutritionHeaderList.vue').default,
    'testimonials' : require('components/homepage/testimonials.vue').default
  }
}
</script>

<style lang="sass">

  

  .aliaddress
    margin-top: 0
  
</style>
