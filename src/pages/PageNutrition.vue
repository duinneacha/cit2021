<template>
  <q-page class="bg-green-2 constrain">
    <div class="row q-pa-md logo-banner">
      <q-img
        src="../assets/ali_logo.png"
        class="ali-logo"
      />
   </div>
   
   <div class="row bg-grey-4">
     <q-card class="my-card full-width">
       <q-card-section horizontal>
         <q-img
           class="coal-5"
           src="../assets/nutrition.png"
         />
       <q-card-section class="text-subtitle1">
         <p>Nutritional Therapy is for everyone, it is centred on supporting all aspects of a person’s health and wellbeing: digestion, immune health, energy and blood sugar management, toxin removal and elimination, circulation and transport, hormonal function and susceptibility to food responses.
          We look at all aspects of a client’s life from stress, lifestyle factors, past medical history and previous life challenges, family history and genetic predisposition.</p>

          <p class="text-caption">  * All children under the age of 16 must be accompanied by a parent or guardian. Children over 16 must have parents’ permission to attend.</p>
       </q-card-section>

       
       
       
       </q-card-section>
       <q-separator />

     </q-card>
      
     
   </div>
   <div class="q-md-xl">

    <q-card
        class="my-card text-grey-2 text-center q-mb-lg full-width"
        style="background-color: #94236E; color: #4FB854"  
    >
        <q-card-section>
          <div class="text-h6">Book an appointment here <q-btn class="q-ml-md" color="green-3" type="a" icon="email" to="/contact">alinutrition@gmail.com</q-btn> </div>
        </q-card-section>
      </q-card>

   </div>
   

   <div class="row bg-purple-2">

      <q-card
        v-for="nutritionItem in nutritionData"
        :key="nutritionItem.itemHeader"
        :id="nutritionItem.sectionID"
        class="my-card col col-5 q-ma-md q-ma-md"
      >
        <q-card-section
          class="text-grey-2"
          style="background-color: #94236E;"
        >
          <div class="text-subtitle1 text-bold"> {{ nutritionItem.itemHeader }}</div>
          
        </q-card-section>

        <q-separator />
        <q-card-section class="text-grey-9 text-body2">
          <div >{{ nutritionItem.itemText }}</div>
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
  name: 'PageNutrition',
  data() {
    return {
     nutritionData: [
    {
     'itemHeader': 'Cholesterol',
     'itemText': 'Cholesterol Text',
     'sectionID': 'cholesterol' 
    },
    {
      'itemHeader': 'Digestive Issues',
      'itemText': 'Digestive Issues Text',
      'sectionID': 'digestive' 
    },
    {
      'itemHeader': 'IBS and IBD',
      'itemText': 'Help with reducing the symptoms of IBS (Irritable bowel syndrome) and IBD (Inflammatory bowel disease)',
      'sectionID': 'ibs' 
    },
    {
      'itemHeader': 'Fatigue',
      'itemText': 'Fatigue Text',
      'sectionID': 'fatigue'
    },
    {
      'itemHeader': 'Thyroid Health',
      'itemText': 'Thyroid Health Text',
      'sectionID': 'thyroid' 
    },
    {
      'itemHeader': 'Brain health and mood',
      'itemText': 'Brain health and mood Text',
      'sectionID': 'brain' 
    },
    {
      'itemHeader': 'Headaches',
      'itemText': 'Headaches Text',
      'sectionID': 'headache' 
    },
    {
      'itemHeader': 'Inflamation and joint pain',
      'itemText': 'Inflamation and joint pain Text',
      'sectionID': 'inflamation' 
    },
    {
      'itemHeader': 'Autoimmune conditions',
      'itemText': 'Autoimmune conditions Text',
      'sectionID': 'autoimmune' 
    },
    {
      'itemHeader': 'Skin conditions',
      'itemText': 'Skin conditions Text',
      'sectionID': 'skin' 
    },
    {
      'itemHeader': 'Fertility and Pregnancy health',
      'itemText': 'Fertility and Pregnancy health Text',
      'sectionID': 'fertility' 
    },
    {
      'itemHeader': 'Wellness and Sports Performance',
      'itemText': 'Wellness and Sports Performance Text',
      'sectionID': 'wellness' 
    }
]
    }
  }
}
</script>
