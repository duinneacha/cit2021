<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        class="ali-logo"
      />
   </div>
   
   <div class="row bg-grey-4 q-pa-md">
    
     <q-card class="my-card">
       <img src="../assets/neuromuscular.png">
        

       <q-card-section>
         <div class="text-h6">Neuromuscular Therapy</div>
     
       </q-card-section>

       <q-card-section class="q-pt-none">
         The session will last an hour and will include hands on work with the client to improve mobility, reduce pain and improve function. The session will include massage and mobilisation. Ali also uses Dry Needling (Acupuncture) and cupping in some of her treatments to aid recovery and prevention. Dry needling is very effective for chronic long-term pain, headaches, TMJ, neck and shoulder tension, calf and plantar fascia issues, glute pain, chronic mid and lower back pain.
         You will be advised on stretching and strengthening exercises to progress you healing.
       </q-card-section>

       <q-card-section class="text-caption text-weight-light">
         * All children under the age of 16 must be accompanied by a parent or guardian. Children over 16 must have parents’ permission to attend.
       </q-card-section>
     </q-card>

   </div>
   <div class="q-md-xl">

    <q-card
        class="my-card text-grey-2 text-center q-mb-lg"
        style="background-color: #94236E; color: #4FB854"
        
    >
        <q-card-section>
          <div class="text-h6">For an urgent issue text <q-btn color="green-3" type="a" icon="phone" href="tel:0877727580">087 7727580</q-btn> and Ali will try her best to see you as soon as possible.</div>
        
          <q-separator class="q-my-md" color="green-3" inset size="3px" />

          <div class="text-h6">Alternatively drop Ali an email here <q-btn class="q-ml-md" color="green-3" type="a" icon="email" to="/contact">alinutrition@gmail.com</q-btn> </div>

        </q-card-section>
        
        


      </q-card>

   </div>
   <div class="row">
    <q-btn to="/" color="blue" round icon="home" size="xl"/>
   </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageMuscular'
}
</script>
<style lang="sass">
.my-card
  width: 60%
  height: auto
  margin: 0 auto
</style>