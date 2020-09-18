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
          Ali's Nutrition and Sports Therapy supports you to reach your optimal health and well-being. Using her own knowledge, qualifications and extensive experience Ali will guide you to reach your goals. Ali prides herself in ongoing learning and development, honesty and accountability.
        </q-card-section>
      </q-card>
   </div>

    <div class="row bg-blue-2">
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Services</q-toolbar-title>
      </q-toolbar>

      <div class="q-pa-md col-6" >
        <neorumuscular-list />
        
      </div>

      <div class="q-pa-md col-6" >
        <nutrition-list />
      </div>
    </div>

    <!-- Testemonials  -->
    <div class="row bg-green-3">
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Testimonials</q-toolbar-title>
      </q-toolbar>

      <q-carousel
        v-model="slide"
        swipeable
        animated
        :padding="padding"
        :vertical="vertical"
        :arrows="arrows"
        :navigation="navigation"
        :navigation-position="navPos"
        height="300px"
        class="bg-green-3 text-grey-9 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    
    <!-- Locate Us  -->
    <div class="row bg-purple-3">
      <!-- <p class="text-h3 text-grey-9 text-bold text-uppercase text-center q-pa-md" style="margin: 0 auto;">Testimonials</p> -->
      <q-toolbar class="text-grey-9 shadow-2 text-center q-mt-md">
        <q-toolbar-title class="text-h4 q-pa-md text-bold">Locate Ali</q-toolbar-title>
      </q-toolbar>

      
    </div>
  <google-map />
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      navPos: 'bottom',
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
             }
  },
  
  components: {
    'google-map': require('components/googlemap.vue').default,
    'neorumuscular-list' : require('components/homepage/NeuromuscularHeaderList.vue').default,
    'nutrition-list' : require('components/homepage/NutritionHeaderList.vue').default
  }
}
</script>

<style lang="sass">

  .logo-banner
    background-color:  
    
  
</style>
