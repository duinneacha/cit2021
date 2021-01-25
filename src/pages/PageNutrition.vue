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
           class="q-pa-md"
           src="../assets/nutrition.png"
         />

         
       <q-card-section class="text-subtitle1 q-pa-md">
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
        class="text-grey-2 text-center q-mb-lg full-width"
        style="background-color: #94236E; color: #4FB854"  
    >
        <q-card-section>
          <div class="text-h6">Fill out the <q-btn class="q-ml-md" color="green-3" type="a" icon="email" to="/nutritionQuestionnaire">Questionnaire</q-btn> here or contact Ali<q-btn class="q-ml-md" color="grey-6" type="a" icon="email" to="/contact">alinutrition@gmail.com</q-btn> </div>
          
        </q-card-section>
      </q-card>

   </div>
   

   <div class="row bg-purple-2">

      <q-card
        v-for="nutritionItem in nutritionData"
        :key="nutritionItem.itemHeader"
        :id="nutritionItem.sectionID"
        class="nutrition-card col col-5 q-ma-md q-ma-md"
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
     'itemHeader': 'Diabetes, Non-alcoholic fatty liver and Cholesterol',
     'itemText': 'Ali has successful experience supporting people in reducing high cholesterol and raised fatty liver markers by guiding them on a a diet plan to change foods that are contributing to ill-health and also recommending lifestyle changes which play a large part in raising cholesterol and fatty liver. It is not just diet-related, stress is one of the biggest drivers of cholesterol and fatty- liver. Ali also does meal plans for clients with Type 2 diabetes. Ali uses researched and approved Neutraceutical supplements  for both conditions to manage and reduce symptoms alongside diet and lifestyle changes',
     'sectionID': 'cholesterol' 
    },
    {
      'itemHeader': 'Digestive Issues, IBD and IBS',
      'itemText': 'Ali has successful experience in supporting clients with a number of digestive issues, using stool testing, urine and breath tests,  Elimination diets, symptom journaling and analysis. Ali will guide and support you to reduce your digestive symptoms, improve your gut health and tolerance. The approaches will depend on the digestive issues, test results and medical history of the client. You may be required to undergo stool and gut testing which Ali will guide you on through Labs she uses. ',
      'sectionID': 'digestive' 
    },
    {
      'itemHeader': 'Thyroid Health',
      'itemText': 'Ali is a Nutritionist  of Thyroid Nutrition Ireland and is one of the Nutritionist on TNI working with clients in this area. If you wish to find out more information you can go to: https://thyroidnutritionireland.com/.  Ali works with Hyper Thyroid, Hypothyroid , Auto- Immune thyroid and clients who have symptoms of thyroid but are sub clinical and do not clinically on blood tests show a level requiring medication. ',
      'sectionID': 'thyroid' 
    },
    {
      'itemHeader': 'Joint Health and Inflamation',
      'itemText': 'Whether you are recovering from a recent injury, have ongoing joint pain or arthritis your diet will be able to help reduce your inflamation and aide a healthy recovery. Ali can guide you with an antiinflammatory meal plan to include foods that reduce inflamation and eliminate foods that trigger and heighten inflamation pathways. She can also guide  you on approved and effective natural supplements to support a quicker recovery',
      'sectionID': 'inflamation' 
    },
    {
      'itemHeader': 'Other Areas',
      'itemText': 'Ali also works with clients who have low energy, fatigue and joint pain.  Through the guidance of uirne tests on energy markers and inflamation markers, she can support you  with recommendation to improve how your body makes energy.  Nutritional Therapy can also help brain health issues such as foggy head, headaches, alzheimers, low mood or irritability. Contact Ali and discuss your issues, she may be able to help you. ',
      'sectionID': 'otherareas' 
    },
    {
      'itemHeader': 'Autoimmune conditions',
      'itemText': 'Ali has successful experience supporting clients with Auto immune conditions in managing their condition better to reduce flare ups. She has worked with clients with Rheumatoid Arthritis, MS, Chrohns, Thyroiditis, Graves, Psorasis and Type 1 Diabetes.',
      'sectionID': 'autoimmune' 
    },
    {
      'itemHeader': 'Fertility and Pregnancy health',
      'itemText': 'Ali has successfully supported couples who have been trying to conceive with nutrional, lifestyle and neutraceutical support to strengthen their chances alongside natural means and IVF. She has also worked with clients to improve overall hormonal health such as missed menstrual cycles , irregular cycles, PMS and heavy cycles, PCOS and Endometriosis as well as supporting Men with low testosterone levels and prostrate health.',
      'sectionID': 'fertility' 
    },
    {
      'itemHeader': 'Sports Performance',
      'itemText': 'Ali is very passionate about Sport and has competed in Sport all her life. She has worked with sports clients in the following areas and is always open to new sports clients who are passionate about how their Nutrition and Lifestyle can influence their performances.',
      'sectionID': 'sportsperf' 
    },
    {
      'itemHeader': 'Triathletes and Long Distance Runners',
      'itemText': 'Ali does plans to support effective recovery and maximum endurance and performance to include Meal plans and supplement recommendations alongside Lifestyle recommendations to match their demands and body composition. Ali has been involved in Cobh Triathlon Club for 7 years and has an appreciation of the demands of the sport.',
      'sectionID': 'runners' 
    },
    {
      'itemHeader': 'Strength Athletes',
      'itemText': 'Whether your chosen sport is Weightlifting, Powerlifting or Crossfit, Ali can support you with a Meal Plan to aide your recovery and strength gains while maintaing the body composition you need for your chosen weight class or for your goals. Ali is also an active Weightlifter and Crossfitter and regulary trains herself.',
      'sectionID': 'strength' 
    }
]
    }
  }
}
</script>

<style lang="sass" scoped>
.nutrition-card
  width: 100%
  max-width: 400px

</style>