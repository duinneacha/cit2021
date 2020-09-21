<template>
  <q-page class="bg-green-2">

    <div class="q-pa-md row items-start q-gutter-md full-width">
    <q-card class="my-card">
              <q-card-section>
          <div class="text-h6">Ali Dorgan Dip NT, BA Soc. Sc. Member NTOI, Member Thyroid Nutrition Ireland.</div>
          <div class="text-subtitle2">NUTRITION & NEUROMUSCULAR SPORTS THERAPIST</div>
        </q-card-section>

      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="../assets/ali-about.jpg"
        />

        <q-card-section class="text-subtitle2">
          <p>Ali’s passion and interest in wellbeing stems from her background in competitive sports. She qualified in 2003 with a Degree in Social Science, then went on to get her Neuromuscular Therapy qualification in 2005. Healthy eating and Nutrition has always been a solid part of Ali’s lifestyle. She further developed her knowledge and expertise with a 4 Year Nutritional Therapy qualification which she graduated from in 2018.</p>
          <p>She enjoys working with clients who have health issues and are willing to make long term changes to improve their health. </p>
          <p>Ali has done further training in Advanced Dry Needling (Acupuncture) and uses a hands-on approach to her treatments. </p>
          <p>Ali will guide you, support you, encourage you, challenge you and educate you on what is important for your health and to achieve your goals.</p>

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
 
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>


<style lang="sass">
.my-card
  width: 100%
  height: auto
  margin: 0 auto

  
</style>