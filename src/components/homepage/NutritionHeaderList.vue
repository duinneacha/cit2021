<template>
  <div class="nutrition-list">

    <q-toolbar
      class="text-grey-2 text-center"
      style="background-color: #94236E;"
    >
      <q-toolbar-title class="text-weight-bold">Nutrition</q-toolbar-title>
    </q-toolbar>

    <q-list bordered padding separator class="bg-green-1 text-grey-9">

      <q-item
        v-for="nutritionItem in nutritionData"
        :key="nutritionItem.itemHeader"
        clickable
        
        
      >
        <q-item-section>
          <q-btn
            no-caps
            color="green-2"
            :label="nutritionItem.itemHeader"
            @click=" processLink(nutritionItem.sectionID)"
            text-color="grey-9"
          />
          <!-- <q-item-label class="text-bold">{{ nutritionItem.itemHeader }}</q-item-label> -->
          <!-- <q-item-label caption>{{ nutritionItem.itemText }}</q-item-label> -->
        <!-- :to="nutritionItem.sectionID"   -->
        </q-item-section>

      </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
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
      'itemText': 'Ali has succesful experience in supporting clients with a number of digestive issues, using stool testing, urine and breath tests,  Elimination diets, symptom journalling and analysis. Ali wil guide and support you to reduce your digestive symptoms, improve your gut health and immunity. The approaches will depend on the digestive issues, test results and medical history of the client. You may be required to undergo stool and gut testing which Ali will guide you on through Labs she uses. ',
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
    
  },
  methods: {
     processLink(link) {
       console.log('Link: ', link)
       this.$router.push("/nutrition")
       console.log(document.getElementById("ibs"))
      //  document.getElementById("ibs").scrollIntoView()
     } 
    }
}
</script>


  


    {
        'itemHeader': 'Cholesterollll',
        'itemText': 'Cholesterol Text',
        'sectionID': '/nutrition#cholesterol' 
      },
      {
        'itemHeader': 'Digestive Issues',
        'itemText': 'Digestive Issues Text',
        'sectionID': '/nutrition#digestive'
      },
      {
        'itemHeader': 'IBS and IBD',
        'itemText': 'Help with reducing the symptoms of IBS (Irritable bowel syndrome) and IBD (Inflammatory bowel disease)',
        'sectionID': '/nutrition#ibs' 
      },
      {
        'itemHeader': 'Fatigue',
        'itemText': 'Fatigue Text',
        'sectionID': '/nutrition#fatigue'
      },
      {
        'itemHeader': 'Thyroid Health',
        'itemText': 'Thyroid Health Text',
        'sectionID': '/nutrition#thyroid'
      },
      {
        'itemHeader': 'Brain health and mood',
        'itemText': 'Brain health and mood Text',
        'sectionID': '/nutrition#brain'
      },
      {
        'itemHeader': 'Headaches',
        'itemText': 'Headaches Text',
        'sectionID': '/nutrition#headache'
      },
      {
        'itemHeader': 'Inflamation and joint pain',
        'itemText': 'Inflamation and joint pain Text',
        'sectionID': '/nutrition#inflamation'
      },
      {
        'itemHeader': 'Autoimmune conditions',
        'itemText': 'Autoimmune conditions Text',
        'sectionID': '/nutrition#autoimmune'
      },
      {
        'itemHeader': 'Skin conditions',
        'itemText': 'Skin conditions Text',
        'sectionID': '/nutrition#skin'
      },
      {
        'itemHeader': 'Fertility and Pregnancy health',
        'itemText': 'Fertility and Pregnancy health Text',
        'sectionID': '/nutrition#fertility'
      },
      {
        'itemHeader': 'Wellness and Sports Performance',
        'itemText': 'Wellness and Sports Performance Text',
        'sectionID': '/nutrition#wellness'
      }