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
        'itemHeader': 'Cholesterol',
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